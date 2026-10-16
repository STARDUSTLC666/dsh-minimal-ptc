import test from 'node:test'
import assert from 'node:assert/strict'
import { apply } from '../presets/ptc-minimal/ptc-persona.mjs'

async function fixture() {
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
  await apply(ctx)
  return { ctx, calls, visible, runtime, scope, get section() { return section }, get suppressed() { return suppressed }, get disposed() { return disposed } }
}

test('complete minimal prompt retains the Host SDK and literal descriptions', async () => {
  const host = await fixture(), text = host.section.text({ scope: host.scope })
  assert.ok(text.startsWith('You are a helpful software engineer assistant.\n'))
  assert.match(text, /Only run_code may be called directly/)
  assert.match(text, /first: literal \{\{not_a_variable\}\}/)
  assert.equal(host.section.complete, true)
  assert.equal(host.section.interpolate, false)
  assert.equal(host.suppressed, true)
  assert.deepEqual(host.calls[0].schemas.map(t => t.name), ['first'])
  assert.deepEqual(host.calls[0].schemas[0].output, { type: 'number' })
  host.ctx.dispose(); assert.equal(host.disposed, true)
})

test('each assembly follows visible tools and the current runtime format', async () => {
  const host = await fixture()
  host.section.text({ scope: host.scope })
  host.visible.delete('first')
  host.visible.set('second', { name: 'second', description: 'newly enabled', parameters: { type: 'object' }, output: { schema: { type: 'string' } } })
  host.runtime.programFormat = 'repl'
  const text = host.section.text({ scope: host.scope })
  assert.doesNotMatch(text, /first:/)
  assert.match(text, /second: newly enabled/)
  assert.equal(host.calls.at(-1).format, 'repl')
  host.runtime.language = 'python'
  assert.match(host.section.text({ scope: host.scope }), /second/)
})

test('unavailable language or output contracts fail visibly', async () => {
  const host = await fixture()
  host.runtime.language = 'unknown'
  assert.throws(() => host.section.text({ scope: host.scope }), /no Host SDK renderer/)
  host.runtime.language = 'typescript'
  host.visible.get('first').output = undefined
  assert.throws(() => host.section.text({ scope: host.scope }), /missing output schema/)
})
