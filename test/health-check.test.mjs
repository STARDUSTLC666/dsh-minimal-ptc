import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdirSync, mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { findProfileCoreCopies, schedulerKeyStatus } from '../lib/index.js'

const SCHEDULER_DESC = '@deepseek-ai/dsh-tools.scheduler'

test('schedulerKeyStatus: Symbol.for-keyed registry reads as global', () => {
  const tools = { [Symbol.for(SCHEDULER_DESC)]: { prepare() {} } }
  assert.equal(schedulerKeyStatus(tools), 'global')
})

test('schedulerKeyStatus: module-local same-description symbol reads as module-local', () => {
  const tools = { [Symbol(SCHEDULER_DESC)]: { prepare() {} } }
  assert.equal(schedulerKeyStatus(tools), 'module-local')
})

test('schedulerKeyStatus: missing registry or scheduler reads as absent', () => {
  assert.equal(schedulerKeyStatus(undefined), 'absent')
  assert.equal(schedulerKeyStatus({}), 'absent')
  assert.equal(schedulerKeyStatus({ [Symbol('unrelated')]: 1 }), 'absent')
})

test('schedulerKeyStatus: the 0.1.6 dual-instance failure is visible', () => {
  // Two dsh-tools instances with module-local Symbols: the registry was made
  // by one, the agent loop looks up with the other → undefined.prepare.
  const instanceA = Symbol(SCHEDULER_DESC)
  const instanceB = Symbol(SCHEDULER_DESC)
  assert.notEqual(instanceA, instanceB)
  const registry = { [instanceA]: { prepare: () => 'ok' } }
  assert.equal(registry[instanceB], undefined)
  // Symbol.for survives the same duplication.
  assert.equal(Symbol.for(SCHEDULER_DESC), Symbol.for(SCHEDULER_DESC))
})

test('findProfileCoreCopies: flags @deepseek-ai copies inside profiles only', () => {
  const home = mkdtempSync(join(tmpdir(), 'dsh-minimal-ptc-health-'))
  try {
    // A profile holding a duplicate core package copy.
    const dup = join(home, 'web', 'node_modules', '@deepseek-ai', 'dsh-tools')
    mkdirSync(dup, { recursive: true })
    // A profile with third-party plugins only — must not be flagged.
    mkdirSync(join(home, 'clean', 'node_modules', 'some-plugin'), { recursive: true })
    // A profile without node_modules at all — must not throw.
    mkdirSync(join(home, 'empty'), { recursive: true })

    const hits = findProfileCoreCopies(home)
    assert.deepEqual(hits, [dup])
  } finally {
    rmSync(home, { recursive: true, force: true })
  }
})
