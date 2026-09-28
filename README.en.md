[中文](README.md)

# dsh-minimal-ptc

## 0.5.1 update (2026-09-27)

Declares the tools service dependency so the startup health check can inspect the tool scheduler on the current Cordis host.

Validation host: Harness `0.2.0-rc.1` built from official sources (commit `407e65c8`) with Node `24.16.0` on 2026-09-28. All 18 plugin tests pass in an isolated environment; all 18 plugins mount together in one host registering 0 tools, with tool schemas and health-check contracts passing. No live ports or external services were exercised in this round.

Adds **Minimal PTC** to DeepSeek Harness: a concise system prompt with files, terminals, search, skills and installed plugin tools, orchestrated through `run_code`. Windows includes Git Bash and persistent PowerShell.

## Install and use

Version 0.5.0 requires **Harness 0.1.7 or later**. Use `dsh-minimal-ptc@0.4.7` on Harness 0.1.5/0.1.6.

```bash
dsh plugin --profile web add dsh-minimal-ptc
```

Restart `dsh web`, start a new session and choose **极简 PTC 模式** (Minimal PTC) from the mode picker above the message box. Describe your task normally; no preset directory or YAML editing is required.

For example: “Run this project’s tests, find the failures and fix them.” Existing email, calendar and other plugin tools remain available.

## Changes in 0.5.0

- Registers through the official Harness 0.1.7 declarative Agent preset service, fixing the missing mode after a host upgrade.
- Installs and updates the preset with the plugin. Existing user content in `.agent-presets/ptc-minimal` is preserved.
- Checks for conflicting runtime packages without flagging supported helpers such as `schemastery` and `cosmokit`.
- Uses `workflow-ptc` and retains plugin tools, Git Bash, persistent PowerShell, search, plans, goals and subagents.

## Compatibility and validation

Validation host: Harness `0.2.0-rc.1` built from official sources (commit `407e65c8`) with Node `24.16.0` on 2026-09-28. 18 plugin tests pass in an isolated environment (1 skipped); all 18 plugins load together in one host with passing tool contracts and skill registration. The real Web mode picker lists and selects the preset; a real agent mounts it with `run_code` as its model entry point while retaining plugin tools and the shell.

A real `run_code` call to the RSS plugin passed in a sandboxed Windows workspace and again after restart. The fixture owner has full control of the disposable directory so the host can apply sandbox permissions. External mail, databases and other services still require their own valid configuration.

Requires Node 22.19 or later within 22.x, or 24 or later.

## Windows terminals

A standard Git for Windows installation is detected automatically. For a custom location, set `GIT_BASH` to the full path of `bash.exe` before starting DSH. PowerShell sessions preserve their current directory, variables and functions.

Developers creating their own preset can use the bundled `ptc-minimal.patch.yml` as a reference; the executor module is `dsh-minimal-ptc/gitbash-executor`.

| Executor option | Default | Purpose |
| :-- | :-- | :-- |
| `shellPath` | auto-detected | Git Bash path |
| `timeoutMs` | 120000 | Per-command timeout in ms |
| `maxTimeoutMs` | 600000 | Maximum requested timeout |
| `maxOutputBytes` | 64000 | Output cap per call |
| `maxSpillBytes` | 67108864 | Output spill-to-disk cap |
| `graceMs` | 3000 | Grace period after timeout |

## Troubleshooting

If the mode is missing, confirm Harness is 0.1.7 or later and restart after installation. Recreating a retired preset directory will not help: the new host does not discover presets there.

If every tool fails with `Cannot read properties of undefined (reading 'prepare')`, check startup logs for duplicate runtime packages. Update the plugin bringing in extra `dsh-tools` / `cordis` copies and reinstall dependencies. Do not remove the entire `@deepseek-ai` directory: public helpers are supported dependencies. Another confirmed cause is the host loading two tool build outputs with a module-local scheduler `Symbol`; source builds can use `Symbol.for('@deepseek-ai/dsh-tools.scheduler')` and rebuild.

## Uninstall

```bash
dsh plugin --profile web remove dsh-minimal-ptc
```

Restart the Web service afterward.

## License

MIT
