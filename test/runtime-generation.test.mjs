import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { apply } from '../lib/index.js'
import pkg from '../package.json' with { type: 'json' }

test('selects the workflow provider after startup and refreshes managed presets when the host changes', () => {
  const dir = mkdtempSync(join(tmpdir(), 'dsh-minimal-ptc-runtime-'))
  const previous = process.env.DSH_HOME
  process.env.DSH_HOME = dir
  const preset = join(dir, '.agent-presets', 'ptc-minimal')
  const composition = join(preset, 'agent.cordis.yml')
  const marker = join(preset, '.dsh-ptc-minimal.version')
  let ready
  let modern = false
  const context = {
    get: name => name === 'ptcRuntime' && modern ? { language: 'typescript' } : undefined,
    appReady: { onReady(listener) { ready = listener; return () => { ready = undefined } } },
    effect: callback => callback(),
  }
  try {
    apply(context)
    assert.equal(existsSync(composition), false, 'do not decide before runtime providers have loaded')
    modern = true
    ready()
    assert.match(readFileSync(composition, 'utf8'), /name: '@deepseek-ai\/dsh-workflow-ptc'/)
    assert.doesNotMatch(readFileSync(composition, 'utf8'), /dsh-workflow-worker-thread/)
    assert.equal(readFileSync(marker, 'utf8').trim(), pkg.version + ':ptc-runtime')

    writeFileSync(composition, '# same host user edit')
    apply(context)
    ready()
    assert.equal(readFileSync(composition, 'utf8'), '# same host user edit')

    modern = false
    apply(context)
    ready()
    assert.match(readFileSync(composition, 'utf8'), /name: '@deepseek-ai\/dsh-workflow-worker-thread'/)
    assert.equal(readFileSync(marker, 'utf8').trim(), pkg.version)

    rmSync(marker)
    writeFileSync(composition, '# unmanaged user preset')
    modern = true
    apply(context)
    ready()
    assert.equal(readFileSync(composition, 'utf8'), '# unmanaged user preset')
    assert.equal(existsSync(marker), false)
  } finally {
    if (previous === undefined) delete process.env.DSH_HOME
    else process.env.DSH_HOME = previous
    rmSync(dir, { recursive: true, force: true })
  }
})
