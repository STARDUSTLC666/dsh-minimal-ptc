# dsh-minimal-ptc

[中文](README.md)

![dsh-minimal-ptc whale girl plugin cover](https://raw.githubusercontent.com/STARDUSTLC666/dsh-minimal-ptc/main/assets/cover-whale-girl.png)

Combine the official minimal prompt with PTC orchestration, plugin tools and Windows shell support.

[![npm](https://img.shields.io/npm/v/dsh-minimal-ptc)](https://www.npmjs.com/package/dsh-minimal-ptc) [![downloads](https://raw.githubusercontent.com/STARDUSTLC666/dsh-suite/npm-downloads/assets/dsh-minimal-ptc-downloads.svg)](https://www.npmjs.com/package/dsh-minimal-ptc)

## What it does

- Use the official run_code entry for multi-step tool calls.
- Keep files, search, skills, plans, goals and subagent tools.
- Offer Git Bash and the official persistent PowerShell on Windows.

## Install

In DSH Desktop, install `dsh-minimal-ptc` from the Plugins panel. If the bundled dsh command is available:

```bash
dsh plugin --profile desktop add dsh-minimal-ptc
```

For the web version, replace `desktop` with `web`. Restart DSH after installation.

## Start using it

Restart DSH, create a session and select “Minimal PTC” from the mode selector before describing your task.

## Requirements and configuration

Uses the official declarative preset interface. Git Bash requires Git for Windows. The guide documents extensions beyond the stock PTC preset.

Detailed configuration, tool arguments and troubleshooting are in the [usage guide](docs/USAGE.en.md). For standalone development, follow the Node requirement in [package.json](package.json).

## Documentation

- [Usage and troubleshooting](docs/USAGE.en.md)
- [Changelog](CHANGELOG.md)
- [Validation scope and history](docs/VALIDATION.md)
- [Report a problem or suggest a feature](https://github.com/STARDUSTLC666/dsh-minimal-ptc/issues)

## License

[MIT](LICENSE)
