// dsh-minimal-ptc 宿主行：把内置的 ptc-minimal 预设物化到用户预设根目录。
//
// 预设发现是实时重读的，因此安装完成后重启一次 web profile 进程，
// 选择器里就会出现「极简 PTC 模式」。
//
// 物化策略：目标目录不存在 → 写入全部文件并留版本标记；
// 版本标记低于当前版本 → 用插件自带文件刷新；
// 目录存在但无标记（视为用户自建）→ 不覆盖。
//
// 零运行时依赖：harness home 的解析逻辑内置（DSH_HOME 环境变量优先，
// 否则 ~/.dsh），与 dsh 官方规则一致。
import { mkdirSync, readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs'
import { homedir } from 'node:os'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import pkg from '../package.json' with { type: 'json' }

export const name = 'ptc-minimal-preset'
export const inject = ['appReady']

const VERSION = pkg.version
const PRESET_ID = 'ptc-minimal'
const MARKER = '.dsh-ptc-minimal.version'

// dsh-tools keys its tool scheduler with this symbol description. On stock
// hosts it is a module-local Symbol(), so any second dsh-tools instance
// (duplicate profile copy, or the package's own dual build outputs on
// 0.1.6-alpha) breaks the agent-loop lookup: every tool call then fails with
// "Cannot read properties of undefined (reading 'prepare')".
const SCHEDULER_SYMBOL_DESC = '@deepseek-ai/dsh-tools.scheduler'

const packageDir = fileURLToPath(new URL('..', import.meta.url))
const presetSourceDir = join(packageDir, 'presets', PRESET_ID)

/** 与 @deepseek-ai/dsh-home-paths 相同的解析规则：DSH_HOME > ~/.dsh。 */
function dshHomePath(...segments) {
  const env = process.env.DSH_HOME
  const fromEnv = typeof env === 'string' && env.trim().length > 0 ? env : null
  let base = fromEnv ?? join(homedir(), '.dsh')
  if (base === '~') base = homedir()
  if (base.startsWith('~/') || base.startsWith('~\\')) base = join(homedir(), base.slice(2))
  return resolve(base, ...segments)
}

function materialize(logger, modernRuntime) {
  const dir = dshHomePath('.agent-presets', PRESET_ID)
  mkdirSync(dir, { recursive: true })
  const revision = modernRuntime ? `${VERSION}:ptc-runtime` : VERSION

  let marker = null
  try {
    marker = readFileSync(join(dir, MARKER), 'utf8').trim()
  } catch {
    // 无标记：可能是首次安装，也可能是用户自建目录
  }

  if (marker === revision) return
  if (marker === null && existsSync(join(dir, 'agent.cordis.yml'))) {
    logger?.warn(`dsh-minimal-ptc: ${dir} exists without our marker; leaving it alone`)
    return
  }

  for (const file of ['agent.cordis.yml', 'preset.yml', 'gitbash-executor.mjs']) {
    let content = readFileSync(join(presetSourceDir, file), 'utf8')
    if (modernRuntime && file === 'agent.cordis.yml') {
      content = content.replaceAll('workflow-worker-thread', 'workflow-ptc')
        .replaceAll('`codeRuntime`', '`ptcRuntime`')
    }
    writeFileSync(join(dir, file), content)
  }
  writeFileSync(join(dir, MARKER), revision + '\n')
  logger?.info(`dsh-minimal-ptc: materialized agent preset "${PRESET_ID}" into ${dir}`)
}

export function apply(ctx) {
  ctx.effect(() => ctx.appReady.onReady(() => {
    try {
      materialize(ctx.logger, ctx.get('ptcRuntime') !== undefined)
    } catch (error) {
      ctx.logger?.warn(`dsh-minimal-ptc: preset materialization failed: ${String(error)}`)
    }
    try {
      healthCheck(ctx)
    } catch (error) {
      ctx.logger?.warn(`dsh-minimal-ptc: health check failed: ${String(error)}`)
    }
  }))
}

/**
 * Warn about the two known causes of "Cannot read properties of undefined
 * (reading 'prepare')" before the first session hits them. Warnings only —
 * nothing here blocks startup.
 */
function healthCheck(ctx) {
  const logger = ctx.logger

  // Cause 1 (most common in the wild): a plugin or stale install left a
  // physical copy of @deepseek-ai/* inside some profile's node_modules. The
  // core must come from the CLI's own dependency tree only.
  for (const hit of findProfileCoreCopies()) {
    logger?.warn(
      `dsh-minimal-ptc: duplicate core package in profile: ${hit}\n`
      + '  A second @deepseek-ai copy breaks the tool scheduler key (module-local Symbol) '
      + 'and every tool call fails with "reading \'prepare\'".\n'
      + '  Fix: remove the @deepseek-ai directory from that profile\'s node_modules '
      + '(and reinstall the offending plugin with core packages in peerDependencies), then restart.',
    )
  }

  // Cause 2 (seen on stock 0.1.6-alpha): the host itself can load two dsh-tools
  // instances (bundled lib/index.js vs per-module lib/types/*.js). It is safe
  // only when the scheduler key survives multiple instances, i.e. the host was
  // built with Symbol.for. Probe exactly that.
  const status = schedulerKeyStatus(ctx.tools)
  if (status === 'module-local') {
    logger?.warn(
      'dsh-minimal-ptc: this host keys the tool scheduler with a module-local Symbol '
      + '(unpatched dsh-tools). PTC sessions break with "reading \'prepare\'" '
      + 'whenever a second dsh-tools instance loads in this process.\n'
      + '  Fix: rebuild dsh-tools with `Symbol.for(\'@deepseek-ai/dsh-tools.scheduler\')` '
      + 'in packages/core/tools/src/index.ts, or keep a single dsh-tools copy.',
    )
  }
}

/**
 * Physical @deepseek-ai copies under any profile's node_modules.
 * @returns {string[]} paths like "<profile>/node_modules/@deepseek-ai/<pkg>"
 */
export function findProfileCoreCopies(home = dshHomePath('profiles')) {
  const hits = []
  let profiles = []
  try {
    profiles = readdirSync(home, { withFileTypes: true })
  } catch {
    return hits
  }
  for (const profile of profiles) {
    if (!profile.isDirectory()) continue
    const scopeDir = join(home, profile.name, 'node_modules', '@deepseek-ai')
    let entries = []
    try {
      entries = readdirSync(scopeDir, { withFileTypes: true })
    } catch {
      continue
    }
    for (const entry of entries) {
      if (entry.isDirectory()) hits.push(join(scopeDir, entry.name))
    }
  }
  return hits
}

/**
 * How the host's tool registry exposes the scheduler key:
 * - 'global'       — Symbol.for key works; safe across duplicate instances.
 * - 'module-local' — registry carries a same-description local Symbol; the
 *                    agent loop breaks if a second dsh-tools instance loads.
 * - 'absent'       — no tools registry / no scheduler mounted (nothing to say).
 */
export function schedulerKeyStatus(tools) {
  if (tools == null || (typeof tools !== 'object' && typeof tools !== 'function')) return 'absent'
  if (tools[Symbol.for(SCHEDULER_SYMBOL_DESC)] !== undefined) return 'global'
  const local = Object.getOwnPropertySymbols(tools).some(s => s.description === SCHEDULER_SYMBOL_DESC)
  return local ? 'module-local' : 'absent'
}
