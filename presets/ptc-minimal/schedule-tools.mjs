// Optional Host capability: wait for the service instead of evaluating its
// current readiness in a Loader `disabled` expression. The official module
// is resolved by the Host so this preset never bundles a second core copy.
export const name = 'ptc-minimal-schedule-tools'
export const inject = ['tools']

export function apply(ctx) {
  ctx.inject(['schedule'], async (scheduleCtx) => {
    const exports = await scheduleCtx.loader.import('@deepseek-ai/dsh-tool-schedule')
    scheduleCtx.plugin(scheduleCtx.loader.unwrapExports(exports))
  })
}
