# 更新记录

[返回简介](README.md) · [使用说明](docs/USAGE.md) · [验证记录](docs/VALIDATION.md)

[历史英文记录](docs/CHANGELOG.en.md)

## 0.5.2 (2026-09-28)

- 更新官方 Harness 0.2.0-rc.1 的兼容声明和共同加载验证；运行时代码未变。验证范围见[验证记录](docs/VALIDATION.md)。

## 0.5.1 (2026-09-27)

补齐 tools 服务依赖声明，让启动健康检查可以在新版 Cordis 宿主中读取工具调度器。

## 0.5.0 (2026-09-23)

- 使用 Harness 0.1.7 官方的声明式 Agent 预设注册方式，修复升级后模式消失的问题。
- 预设随插件安装和更新；保留用户旧的 `.agent-presets/ptc-minimal` 目录，不覆盖其中的自定义内容。
- 启动检查只提示会影响工具运行的核心包副本，不再把 `schemastery`、`cosmokit` 等正常依赖误报为冲突。
- 使用新版 `workflow-ptc`，保留插件工具、Git Bash、持久 PowerShell、搜索、计划、目标与子代理能力。

## 更早的改动

完整历史可查阅 [GitHub 提交记录](https://github.com/STARDUSTLC666/dsh-minimal-ptc/commits/main)。
