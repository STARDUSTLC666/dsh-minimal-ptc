[简体中文](README.md) · **English**

# Minimal PTC

**Use minimal prompting and code orchestration for tool tasks.**

[![npm](https://img.shields.io/npm/v/dsh-minimal-ptc)](https://www.npmjs.com/package/dsh-minimal-ptc) [![downloads](https://raw.githubusercontent.com/STARDUSTLC666/dsh-suite/npm-downloads/assets/dsh-minimal-ptc-downloads.svg)](https://www.npmjs.com/package/dsh-minimal-ptc) [![total downloads](https://raw.githubusercontent.com/STARDUSTLC666/dsh-suite/npm-downloads/assets/dsh-minimal-ptc-total-downloads.svg)](https://www.npmjs.com/package/dsh-minimal-ptc)

**[Install](#install) · [Workflow](#start-using-it) · [Full guide](https://github.com/STARDUSTLC666/dsh-minimal-ptc/blob/main/docs/REFERENCE.en.md)**

<picture>
  <source media="(prefers-color-scheme: dark) and (max-width: 640px)" srcset="https://raw.githubusercontent.com/STARDUSTLC666/dsh-minimal-ptc/main/docs/assets/intro/workflow-en-mobile-dark.svg">
  <source media="(max-width: 640px)" srcset="https://raw.githubusercontent.com/STARDUSTLC666/dsh-minimal-ptc/main/docs/assets/intro/workflow-en-mobile-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/STARDUSTLC666/dsh-minimal-ptc/main/docs/assets/intro/workflow-en-dark.svg">
  <img src="https://raw.githubusercontent.com/STARDUSTLC666/dsh-minimal-ptc/main/docs/assets/intro/workflow-en-light.svg" alt="Use minimal prompting and code orchestration for tool tasks. · workflow illustration" width="100%">
</picture>

## Features

- Choose the independent preset in the session mode selector.
- Orchestrate TypeScript/Python tool calls through official run_code.
- Keep host execution and permission rules with Windows terminal support.

## Install

Open **Plugins** in the DSH desktop app and install `dsh-minimal-ptc`. If the CLI is available:

```bash
dsh plugin --profile desktop add dsh-minimal-ptc
```

For the web profile, replace `desktop` with `web`. Restart that DSH profile after installation. The package’s DSH requirement is `>=0.2.1-rc.3`.

## Start using it

1. Install in the DSH profile you use, restart it and create a new session.
2. Select Minimal PTC mode in the session mode selector.
3. Describe the task and workspace; the assistant uses TypeScript/Python tool orchestration. Prepare the selected runtime when needed.
4. Check tool results and actual files. Switch modes for other capabilities; the full Suite is optional.

Example request：

> Complete the task in this workspace. Check available tools and runtimes first and follow the current mode’s rules.

## Before you start

This is a session preset; language runtimes and individual tool dependencies still need to be available.

Configuration, detailed tools and troubleshooting: [full reference](https://github.com/STARDUSTLC666/dsh-minimal-ptc/blob/main/docs/REFERENCE.en.md).

## Plugin updates

Check updates at the bottom of the workbench or native plugin details. Automatic checks are on by default; **automatic installation is off**. You choose whether to install and when to restart. Suite-managed components update with their bundle. [Update behavior](https://github.com/STARDUSTLC666/dsh-minimal-ptc/blob/main/docs/REFERENCE.en.md).

## Documentation

- [Full usage, configuration and limits](https://github.com/STARDUSTLC666/dsh-minimal-ptc/blob/main/docs/REFERENCE.en.md)
- [Release notes](https://github.com/STARDUSTLC666/dsh-minimal-ptc/blob/main/CHANGELOG.md)
- [Validation scope and history](https://github.com/STARDUSTLC666/dsh-minimal-ptc/blob/main/docs/VALIDATION.md)

## Feedback and contributions

If the plugin helps, a Star makes it easier for others to discover. Report problems or suggest improvements in [Issues](https://github.com/STARDUSTLC666/dsh-minimal-ptc/issues); code and documentation [PRs](https://github.com/STARDUSTLC666/dsh-minimal-ptc/pulls) are welcome. Include versions and reproduction steps, and remove credentials from reports.

## License

[MIT](https://github.com/STARDUSTLC666/dsh-minimal-ptc/blob/main/LICENSE)

<a id="what-it-does"></a>
<a id="requirements-and-configuration"></a>
