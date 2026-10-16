// Keep the minimal identity while rendering the callable SDK through the Host.
// A static complete persona discards tools:sdk, leaving only run_code visible
// without the declarations its programs need. Do not bundle another core copy.
export const name = 'ptc-minimal-persona'
export const inject = ['systemPrompt', 'tools', 'loader']

export async function apply(ctx, config = {}) {
  const host = await ctx.loader.import('@deepseek-ai/dsh-tools')
  const prefix = config.prefix ?? 'You are a helpful software engineer assistant.'
  if (typeof prefix !== 'string') throw new Error('dsh-minimal-ptc: persona prefix must be a string')
  ctx.effect(() => ctx.systemPrompt.section({
    name: 'deployment:persona-prefix',
    order: ctx.systemPrompt.getSectionOrder('DEPLOYMENT_PERSONA_PREFIX'),
    complete: true,
    interpolate: false,
    text: ({ scope }) => {
      const runtime = ctx.get('ptcRuntime') ?? ctx.get('codeRuntime')
      const language = runtime?.language ?? 'typescript'
      const render = language === 'typescript' ? host.renderToolsSdk
        : language === 'python' ? host.renderToolsSdkPy : undefined
      if (typeof render !== 'function') throw new Error(`dsh-minimal-ptc: no Host SDK renderer for ${language}`)
      const schemas = ctx.tools.schemas(scope).filter(tool => tool.name !== 'run_code').map(tool => {
        const definition = ctx.tools.get(tool.name, scope)
        if (definition?.output?.schema === undefined) throw new Error(`dsh-minimal-ptc: missing output schema for ${tool.name}`)
        return { name: tool.name, description: tool.description, parameters: tool.parameters, output: definition.output.schema }
      })
      const sdk = render(schemas, runtime?.programFormat ?? 'function-body')
      return `${prefix}\n\nOnly run_code may be called directly. Call the tools declared below from inside its program.\n\n${sdk}`
    },
  }), 'minimal persona with Host PTC SDK')
  if (!(config.includeRuntimeContext ?? false)) ctx.systemPrompt.suppressRuntimeContext()
}
