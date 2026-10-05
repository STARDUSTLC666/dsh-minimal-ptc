import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import yaml from 'js-yaml'

// Public capability contract checked against dsh-v0.2.1-alpha.1's ptc preset.
// Preserve platform expressions as data; service activation is tested below.
const schema = yaml.DEFAULT_SCHEMA.extend([new yaml.Type('tag:yaml.org,2002:js', { kind: 'scalar', construct: value => value })])
const read = file => yaml.load(readFileSync(new URL(file, import.meta.url), 'utf8'), { schema })
const flatten = rows => rows.flatMap(row => [row, ...(row.group ? flatten(row.config) : [])])
test('现代与兼容预设保留官方定时能力、子代理限制及极简提示词', () => {
  for (const rows of [read('../ptc-minimal.patch.yml')[0].insert[0].config.plugins, read('../presets/ptc-minimal/agent.cordis.yml')]) {
    const all = flatten(rows), persona = all.find(row => row.id === 'persona')
    assert.deepEqual(persona.config, { prefix: 'You are a helpful software engineer assistant.', complete: true, includeRuntimeContext: false })
    for (const id of ['tool-fs','tool-fs-search','tool-jobs','tool-schedule','tool-skill','tool-goal','tool-web','tool-todo','tool-ask-user','tool-presentation','present','tool-subagent-list-agents']) assert.ok(all.some(row => row.id === id && row.disabled !== true), id)
    for (const id of ['tool-subagent','tool-subagent-fork']) assert.deepEqual(all.find(row => row.id === id).config.toolFilter.deny.slice().sort(), ['schedule_create','schedule_delete','schedule_list','schedule_update'])
    const schedule = all.find(row => row.id === 'tool-schedule')
    assert.match(schedule.name, /(?:^|\/)schedule-tools(?:\.mjs)?$/)
    assert.equal(schedule.disabled, undefined, 'service readiness cannot disable an entry during parallel startup')
    assert.equal(all.find(row => row.id === 'tool-presentation').config.mode, 'ptc')
    assert.equal(all.some(row => ['agent-instructions','time-context'].includes(row.id)), false)
  }
})
