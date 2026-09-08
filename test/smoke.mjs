import { test } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const plugin = await import('../lib/index.js')

test('plugin exposes the preset materializer shape', () => {
  assert.equal(plugin.name, 'ptc-minimal-preset')
  assert.equal(typeof plugin.apply, 'function')
})

test('materializes all preset files including the git-bash executor', () => {
  const dir = mkdtempSync(join(tmpdir(), 'dsh-minimal-ptc-home-'))
  const previous = process.env.DSH_HOME
  process.env.DSH_HOME = dir
  try {
    plugin.apply({})
    const preset = join(dir, '.agent-presets', 'ptc-minimal')
    assert.ok(existsSync(join(preset, 'agent.cordis.yml')))
    assert.ok(existsSync(join(preset, 'preset.yml')))
    assert.ok(existsSync(join(preset, 'gitbash-executor.mjs')), 'Windows Git Bash executor must be materialized with the preset')
  } finally {
    if (previous === undefined) delete process.env.DSH_HOME
    else process.env.DSH_HOME = previous
    rmSync(dir, { recursive: true, force: true })
  }
})

test('ships a ptc-minimal preset composition', () => {
  const composition = readFileSync(new URL('../presets/ptc-minimal/agent.cordis.yml', import.meta.url), 'utf8')
  const metadata = readFileSync(new URL('../presets/ptc-minimal/preset.yml', import.meta.url), 'utf8')
  assert.match(composition, /id: persona/)
  assert.match(composition, /id: tool-presentation/)
  // dsh 0.1.3 起 persona 字段名是 prefix（旧名 text 会导致新建会话静默失败）
  assert.match(composition, /prefix: You are a helpful software engineer assistant/)
  assert.doesNotMatch(composition, /^\s+text: /m)
  assert.match(metadata, /name: 极简 PTC 模式/)
})

test('matches the dsh-v0.1.2-alpha.4 PTC tool surface', () => {
  const composition = readFileSync(new URL('../presets/ptc-minimal/agent.cordis.yml', import.meta.url), 'utf8')
  assert.match(composition, /- id: tool-workflow\n      name: '@deepseek-ai\/dsh-tool-workflow'[\s\S]*?      disabled: true/)
  assert.match(composition, /- id: tool-ralph\n      name: '@deepseek-ai\/dsh-tool-ralph'/)
  assert.match(composition, /- id: tool-web\n  name: '@deepseek-ai\/dsh-tool-web'\n  config:\n    fetch: true/)
})
