**简体中文** · [English](README.en.md)

# Minimal PTC

> **用极简提示与代码编排，干净高效地完成多步工具任务。**

DeepSeek Harness（`>=0.2.2-rc.3`）极简 PTC 会话预设插件：精简系统提示词，通过官方 `run_code` 编排 Python / TypeScript 工具调用，完整保留宿主安全与子代理约束。

[![npm](https://img.shields.io/npm/v/dsh-minimal-ptc)](https://www.npmjs.com/package/dsh-minimal-ptc) [![downloads](https://raw.githubusercontent.com/STARDUSTLC666/dsh-suite/npm-downloads/assets/dsh-minimal-ptc-downloads.svg)](https://www.npmjs.com/package/dsh-minimal-ptc) [![total downloads](https://raw.githubusercontent.com/STARDUSTLC666/dsh-suite/npm-downloads/assets/dsh-minimal-ptc-total-downloads.svg)](https://www.npmjs.com/package/dsh-minimal-ptc)

**[核心能力](#核心能力) · [安装](#安装) · [开始使用](#开始使用) · [完整说明](https://github.com/STARDUSTLC666/dsh-minimal-ptc/blob/main/docs/REFERENCE.zh.md)**

<picture>
  <source media="(prefers-color-scheme: dark) and (max-width: 640px)" srcset="https://raw.githubusercontent.com/STARDUSTLC666/dsh-minimal-ptc/main/docs/assets/intro/workflow-zh-mobile-dark.svg">
  <source media="(max-width: 640px)" srcset="https://raw.githubusercontent.com/STARDUSTLC666/dsh-minimal-ptc/main/docs/assets/intro/workflow-zh-mobile-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/STARDUSTLC666/dsh-minimal-ptc/main/docs/assets/intro/workflow-zh-dark.svg">
  <img src="https://raw.githubusercontent.com/STARDUSTLC666/dsh-minimal-ptc/main/docs/assets/intro/workflow-zh-light.svg" alt="用极简提示与代码编排，完成多步工具任务。 · 流程示意" width="100%">
</picture>

## 核心能力

| 能力 | 说明 |
| :--- | :--- |
| **独立极简会话预设** | 在 DSH 会话模式选择器中一键切换「极简 PTC 模式」，减少冗余提示词开销 |
| **官方 `run_code` 编排** | 用 TypeScript / Python 脚本串联多步工具调用，适合批处理与结构化数据处理 |
| **宿主安全边界继承** | 完整保留 DSH 执行模式、权限审批与子代理安全约束，不绕过宿主护栏 |
| **Windows 终端原生适配** | 针对 Windows Git Bash 与持久 PowerShell 会话优化命令与输出稳定性 |

## 安装

在 DSH 桌面版「插件」面板安装 `dsh-minimal-ptc`，或使用命令行：

```bash
dsh plugin --profile desktop add dsh-minimal-ptc
```

网页版把 `desktop` 改为 `web`；安装后重启对应的 DSH。宿主要求 `>=0.2.2-rc.3`。

## 开始使用

1. 将插件安装到实际使用的 DSH profile，重启后新建会话。
2. 在会话模式选择器中切换到「**极简 PTC 模式**」。
3. 说明任务目标与工作区，助手将通过 TypeScript / Python 编排工具执行（需确保对应语言运行时已安装）。
4. 核对执行结果与文件改动；需要其他能力时直接切换会话模式，无需额外安装整套 Suite。

### 常用对话示例

> 在这个工作区完成任务，先检查可用工具和运行环境，按当前模式的约束执行。

## 开始前要知道

- 本插件是**会话预设**：具体工具依赖与 Python / TypeScript 运行时仍需在本地可用。
- 关于 `alpha.3` 原生 executor 与旧宿主回退机制，见 [执行器兼容说明](docs/WORKBENCH.md)；完整配置与边界见 [详细使用说明](https://github.com/STARDUSTLC666/dsh-minimal-ptc/blob/main/docs/REFERENCE.zh.md)。

## 插件更新

在工作台或原生插件详情页底部检查更新。默认自动检查，**默认不自动安装**；是否安装、何时重启由你决定。Suite 管理的组件随整包更新。[查看更新规则](https://github.com/STARDUSTLC666/dsh-minimal-ptc/blob/main/docs/REFERENCE.zh.md)。

## 文档与反馈

- [详细使用、配置与边界](https://github.com/STARDUSTLC666/dsh-minimal-ptc/blob/main/docs/REFERENCE.zh.md) · [执行器兼容说明](docs/WORKBENCH.md) · [更新记录](https://github.com/STARDUSTLC666/dsh-minimal-ptc/blob/main/CHANGELOG.md) · [验证范围](https://github.com/STARDUSTLC666/dsh-minimal-ptc/blob/main/docs/VALIDATION.md)
- 欢迎 Star，问题与建议请提交 [Issues](https://github.com/STARDUSTLC666/dsh-minimal-ptc/issues) 或 [PR](https://github.com/STARDUSTLC666/dsh-minimal-ptc/pulls)（附上版本与复现步骤，并移除凭据）。

## License

[MIT](https://github.com/STARDUSTLC666/dsh-minimal-ptc/blob/main/LICENSE)

<a id="依赖与配置"></a>
