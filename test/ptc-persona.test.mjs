import test from 'node:test'
import assert from 'node:assert/strict'
import { apply } from '../presets/ptc-minimal/ptc-persona.mjs'

async function fixture(config) {
  const visible = new Map([['first', { name: 'first', description: 'literal {{not_a_variable}}', parameters: { type: 'object' }, output: { schema: { type: 'number' } } }]])
  let section, suppressed = false, disposed = false
  const calls = [], scope = {}, runtime = { language: 'typescript', programFormat: 'function-body' }
  const renderer = (schemas, format) => { calls.push({ schemas, format }); return 'SDK ' + format + ' ' + schemas.map(t => t.name + ': ' + t.description).join(', ') }
  const ctx = {
    loader: { async import(name) { assert.equal(name, '@deepseek-ai/dsh-tools'); return { renderToolsSdk: renderer, renderToolsSdkPy: renderer } } },
    get: name => name === 'ptcRuntime' ? runtime : undefined,
    tools: {
      schemas(view) { assert.equal(view, scope); return [...visible.values(), { name: 'run_code' }] },
      get(name, view) { assert.equal(view, scope); return visible.get(name) },
    },
    systemPrompt: {
      getSectionOrder: () => 0,
      section(value) { section = value; return () => { disposed = true } },
      suppressRuntimeContext() { suppressed = true },
    },
    effect(callback) { ctx.dispose = callback() },
  }
  await apply(ctx, config)
  return { ctx, calls, visible, runtime, scope, get section() { return section }, get suppressed() { return suppressed }, get disposed() { return disposed } }
}

test('minimal identity leaves Host plan, web, ralph and SDK sections composable', async () => {
  const host = await fixture()
  assert.equal(host.section.text, 'You are a helpful software engineer assistant.')
  assert.notEqual(host.section.complete, true)
  assert.equal(host.section.interpolate, false)
  assert.equal(host.suppressed, true)
  assert.equal(host.calls.length, 0, 'the Host renders its own SDK once; persona must not duplicate it')
  host.ctx.dispose(); assert.equal(host.disposed, true)
})

test('custom identity stays literal and runtime context remains opt-in', async () => {
  const host = await fixture({ prefix: 'Identity {{literal}}', includeRuntimeContext: true })
  assert.equal(host.section.text, 'Identity {{literal}}')
  assert.equal(host.section.interpolate, false)
  assert.equal(host.suppressed, false)
})

test('invalid identity configuration fails visibly', async () => {
  await assert.rejects(fixture({ prefix: 42 }), /prefix must be a string/)
})
