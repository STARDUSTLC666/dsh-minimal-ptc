> Full usage reference. The landing page focuses on outcomes, installation and workflows; detailed parameters, limits, update rules and historical validation links remain here.

# dsh-minimal-ptc

[中文](../README.md)

![dsh-minimal-ptc whale girl plugin cover](https://raw.githubusercontent.com/STARDUSTLC666/dsh-minimal-ptc/main/assets/cover-whale-girl.png)

Combine the official minimal prompt style with Python/TypeScript PTC orchestration in a DSH preset. Keeps plugin tools and Windows shell support while preserving host guidance for plan mode, untrusted web content and tool use.

[![npm](https://img.shields.io/npm/v/dsh-minimal-ptc)](https://www.npmjs.com/package/dsh-minimal-ptc) [![downloads](https://raw.githubusercontent.com/STARDUSTLC666/dsh-suite/npm-downloads/assets/dsh-minimal-ptc-downloads.svg)](https://www.npmjs.com/package/dsh-minimal-ptc) [![total downloads](https://raw.githubusercontent.com/STARDUSTLC666/dsh-suite/npm-downloads/assets/dsh-minimal-ptc-total-downloads.svg)](https://www.npmjs.com/package/dsh-minimal-ptc)

[Download statistics](https://github.com/STARDUSTLC666/dsh-suite/blob/npm-downloads/README.md)

Feedback and contributions are welcome: report [issues](https://github.com/STARDUSTLC666/dsh-minimal-ptc/issues) or submit [pull requests](https://github.com/STARDUSTLC666/dsh-minimal-ptc/pulls).

## What it does

- Use the official run_code entry for multi-step tool calls.
- Keep the minimal identity and generate the official SDK for the current tools and runtime mode.
- Keep files, search, skills, plans, goals and subagent tools.
- Offer Git Bash and the official persistent PowerShell on Windows.

## Install

In DSH Desktop, install `dsh-minimal-ptc` from the Plugins panel. If the bundled dsh command is available:

```bash
dsh plugin --profile desktop add dsh-minimal-ptc
```

For the web version, replace `desktop` with `web`. Restart DSH after installation.

## Start using it

1. Install in the DSH profile you use, restart it and create a new session.
2. Select Minimal PTC mode in the session mode selector.
3. Describe the task and workspace; the assistant uses TypeScript/Python tool orchestration. Prepare the selected runtime when needed.
4. Check tool results and actual files. Switch modes for other capabilities; the full Suite is optional.

## Requirements and configuration

Uses the official declarative preset interface. Git Bash requires Git for Windows. The guide documents extensions beyond the stock PTC preset.

Detailed configuration, tool arguments and troubleshooting are in the [usage guide](USAGE.en.md). For standalone development, follow the Node requirement in [package.json](../package.json).

## Documentation

- [Usage and troubleshooting](USAGE.en.md)
- [Changelog](../CHANGELOG.md)
- [Validation scope and history](VALIDATION.md)
- [Report a problem or suggest a feature](https://github.com/STARDUSTLC666/dsh-minimal-ptc/issues)

## Plugin updates

Requires DSH 0.2.1-rc.3 or newer. Update controls sit at the bottom of the existing workbench, or native plugin details for plugins without a workbench. Checks, release notes and preferences expand in place, with no separate update page or settings menu. Automatic checks are on by default; **automatic installation is off by default**. Only explicit opt-in permits compatible stable patches while idle with no unsaved changes. Preferences are independent, with per-plugin disable, deferral and ignore controls. No forced DSH restart or upgrade, and local-source installations stay unchanged. Suite components explain and operate on the whole Suite in the same footer.

Older releases need one manual update in native plugin management to acquire these controls. Publishing to npm does not replace an existing user installation.

## License

[MIT](../LICENSE)
