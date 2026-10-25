// Only replace the identity. The Host retains its SDK, plan-mode and tool
// guidance sections, and renders each once for the current scope/runtime.
export const name = 'ptc-minimal-persona'
export const inject = ['systemPrompt']

export async function apply(ctx, config = {}) {
  const prefix = config.prefix ?? 'You are a helpful software engineer assistant.'
  if (typeof prefix !== 'string') throw new Error('dsh-minimal-ptc: persona prefix must be a string')
  ctx.effect(() => ctx.systemPrompt.section({
    name: 'deployment:persona-prefix',
    order: ctx.systemPrompt.getSectionOrder('DEPLOYMENT_PERSONA_PREFIX'),
    interpolate: false,
    text: prefix,
  }), 'minimal identity; preserve Host capability guidance')
  if (!(config.includeRuntimeContext ?? false)) ctx.systemPrompt.suppressRuntimeContext()
}
