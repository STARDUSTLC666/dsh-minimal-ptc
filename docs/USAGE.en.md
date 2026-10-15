# dsh-minimal-ptc usage guide

[Overview](../README.en.md) · [Changelog](../CHANGELOG.md) · [Validation](VALIDATION.md)

## Current improvements

The primary minimal PTC agent can use official scheduling tools. Spawn/fork subagents follow official restrictions against creating, listing, updating or deleting schedules. Minimal mode still omits runtime context, time prompts and AGENTS instructions.

Scheduling tools wait for the host's `schedule` service to activate, avoiding preset failures during parallel startup. Older hosts skip the scheduling module and retain existing PTC capabilities; do not install duplicate core packages. The retired subagent `toolFilter` field is no longer passed. Official scheduling tools reject delegated callers at execution time.

## Install and use

Version 0.5.x requires **Harness 0.1.7 or later**. This iteration compares the official **0.2.1-alpha.3** source. Use `dsh-minimal-ptc@0.4.7` on Harness 0.1.5/0.1.6.

```bash
dsh plugin --profile web add dsh-minimal-ptc
```

Restart `dsh web`, start a new session and choose **极简 PTC 模式** (Minimal PTC) from the mode picker above the message box. Describe your task normally; no preset directory or YAML editing is required.

For example: “Run this project’s tests, find the failures and fix them.” Existing email, calendar and other plugin tools remain available.

## Official presets and extensions

The core prompt matches the official Minimal preset. PTC presentation and the `run_code` entry follow the official PTC preset, registered through the host's declarative preset service. Compare [Minimal](https://github.com/deepseek-ai/deepseek-harness/blob/dsh-v0.2.1-alpha.3/packages/bundle/web-app/presets/minimal.patch.yml) and [PTC](https://github.com/deepseek-ai/deepseek-harness/blob/dsh-v0.2.1-alpha.3/packages/bundle/web-app/presets/ptc.patch.yml).

The following extensions make its defaults differ from the stock PTC preset:

- The minimal prompt does not automatically include project AGENTS.md. Rules written by Dream therefore do not automatically enter this mode's context.
- Windows adds Git Bash and the official persistent PowerShell, while disabling the one-shot PowerShell entry.
- Ralph and workflow tools are enabled; the official PTC preset disables both by default.
- Codex, Claude, plugin management and generic `tool-workflow` remain disabled, matching their official defaults.

The host provides tool implementations. The plugin does not bundle a second core runtime or override host approval policy. See [validation records](VALIDATION.md) for the scope of the comparison.

## Optional: retain intermediate Node state

DSH 0.2.1-alpha.3 adds the official `persistent-in-memory` Node execution mode. The default remains `per-call`; this plugin does not automatically change the shared provider.

Copy the bundled `presets/ptc-minimal/persistent-node.patch.yml` to a convenient location and run `dsh --profile web --patch <path>`. Alternatively, save this override as a local YAML file:

```yaml
- id: ptc-runtime
  config:
    executionMode: persistent-in-memory
```

This configures the host's shared Node provider while retaining independent state for each Agent. Return a final JSON expression rather than top-level `return`. Repeating a `let`/`const` declaration fails; assign to an existing variable or choose a new name. Restarting, switching modes or terminating the runtime clears its state; save important results to files. Image reading, automatic compaction and `/compact` use the host's official implementations.

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

If every tool fails with `Cannot read properties of undefined (reading 'prepare')`, check startup logs for duplicate runtime packages. Update the plugin bringing in extra `dsh-tools` / `cordis` copies and reinstall dependencies. Do not remove the entire `@deepseek-ai` directory: public helpers are supported dependencies. If the problem persists, report the host version and startup error in an issue; do not apply an old host source patch to a newer release without checking it.

## Uninstall

```bash
dsh plugin --profile web remove dsh-minimal-ptc
```

Restart the Web service afterward.

## License

MIT
