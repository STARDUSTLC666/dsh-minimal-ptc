import test from 'node:test'
import assert from 'node:assert/strict'
import { apply } from '../presets/ptc-minimal/schedule-tools.mjs'

function host() {
  let activate
  const imports = [], plugins = [], official = { name: 'official-schedule', apply() {} }
  const scoped = {
    loader: {
      async import(name) { imports.push(name); return { default: official } },
      unwrapExports(value) { return value.default ?? value },
    },
    plugin(value) { plugins.push(value) },
  }
  apply({ inject(names, listener) { assert.deepEqual(names, ['schedule']); activate = listener } })
  return { imports, plugins, official, scoped, activate }
}

test('old hosts without schedule never import the absent official module', () => {
  const fixture = host()
  assert.deepEqual(fixture.imports, [])
  assert.deepEqual(fixture.plugins, [])
})

test('a schedule service arriving after preset startup activates official tools', async () => {
  const fixture = host()
  assert.deepEqual(fixture.plugins, [])
  await fixture.activate(fixture.scoped)
  assert.deepEqual(fixture.imports, ['@deepseek-ai/dsh-tool-schedule'])
  assert.deepEqual(fixture.plugins, [fixture.official])
})

test('an available service with a broken official module is not silently ignored', async () => {
  const fixture = host()
  fixture.scoped.loader.import = async () => { throw new Error('module unavailable') }
  await assert.rejects(fixture.activate(fixture.scoped), /module unavailable/)
  assert.deepEqual(fixture.plugins, [])
})
