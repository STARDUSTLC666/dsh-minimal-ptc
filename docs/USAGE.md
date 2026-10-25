# dsh-minimal-ptc 使用说明

[返回简介](../README.md) · [更新记录](../CHANGELOG.md) · [验证记录](VALIDATION.md)

## 本次改进

极简 PTC 的主代理现在可使用官方定时任务；spawn / fork 子代理保持官方限制，不可创建、列举、更新或删除任务。极简模式仍不注入运行时上下文、时间提示或 AGENTS 指令。

定时工具等待宿主的 `schedule` 服务激活后启用，避免启动顺序导致模式加载失败。旧版宿主会跳过官方定时模块，继续使用原有 PTC 能力；无需另外安装 DSH 核心包。新版已移除子代理 `toolFilter` 参数，本插件不再传入该字段；官方定时工具会在执行入口拒绝委派子代理使用提醒。

## 安装和使用

0.5.x 需要 **Harness 0.1.7 及以上**，当前对照 **0.2.1-rc.3** 的官方源码。仍使用 Harness 0.1.5/0.1.6 时，请安装 `dsh-minimal-ptc@0.4.7`。

```bash
dsh plugin --profile web add dsh-minimal-ptc
```

重启 `dsh web`，新建会话，在输入框上方的模式列表中选择 **极简 PTC 模式**，然后像平时一样描述任务。无需创建预设目录或修改 YAML。

例如：「检查这个项目的测试，找出失败原因并修复。」已有的邮件、日历等插件也可按原来的方式使用。

## 官方预设与扩展

人格保留官方 Minimal 的一句身份说明，另附 PTC 执行必需的工具 SDK；通过官方声明式预设服务注册。SDK 从宿主按当前可见工具和执行模式动态生成，包含工具参数和返回类型。默认执行可使用 `return` / `console.log`；持久执行采用宿主的 REPL 指引。对照源码：[Minimal](https://github.com/deepseek-ai/deepseek-harness/blob/dsh-v0.2.1-rc.3/packages/bundle/web-app/presets/minimal.patch.yml)、[PTC](https://github.com/deepseek-ai/deepseek-harness/blob/dsh-v0.2.1-rc.3/packages/bundle/web-app/presets/ptc.patch.yml)。

0.5.7 由官方提示词组合器追加 SDK 与工具安全说明，不再替换完整提示词。计划模式约束、网页不可信输入和 Ralph 使用条件会正常生效；项目 AGENTS 与可选运行时上下文仍按原来的开关默认关闭。

SDK 大小随启用的工具数量增长，因此会比纯粹一句话的 Minimal 占用更多上下文。保留所需的插件即可缩小工具清单。

本插件保留以下扩展，因此与官方 PTC 的默认开关并非完全相同：

- 使用极简提示词，不自动注入项目 AGENTS.md。Dream 写入的项目规则也不会因此自动进入这个模式的上下文。
- Windows 增加 Git Bash 和官方持久 PowerShell；停用官方一次性 PowerShell 入口。
- 启用 Ralph 与 workflow 工具；官方 PTC 默认关闭这两项。
- Codex、Claude、插件管理与通用 `tool-workflow` 的默认开关仍与官方一致，保持关闭。

工具实现由宿主提供，插件不捆绑另一份核心运行时，也不覆盖宿主审批规则。核对范围见[验证记录](VALIDATION.md)。

## 可选：保留 Node 中间变量

DSH 0.2.1-alpha.3 起，官方 Node 执行器可在同一 Agent 的多次 `run_code` 之间保留变量、函数和已导入模块。默认仍是每次独立执行；本插件不会自动切换宿主的执行模式。

需要时，将包内 `presets/ptc-minimal/persistent-node.patch.yml` 复制到方便的位置，执行 `dsh --profile web --patch <该文件路径>`。也可以把以下覆盖配置保存为本机 YAML 文件后使用：

```yaml
- id: ptc-runtime
  config:
    executionMode: persistent-in-memory
```

此开关作用于宿主共享的 Node provider，每个 Agent 各自保存状态。持久模式用最后一个 JSON 表达式返回结果，不能在顶层使用 `return`；重复声明同名 `let` / `const` 会报错，可改为赋值或使用新变量名。重启、切换执行模式或执行器被终止后状态会清空，重要结果仍应保存到文件。读图、自动压缩和 `/compact` 沿用宿主提供的官方实现。

## Windows 终端

安装常规版 Git for Windows 后会自动找到 Git Bash。若安装在自定义位置，可设置 `GIT_BASH` 为 `bash.exe` 的完整路径，再启动 DSH。PowerShell 会话会保留当前目录、变量和函数。

开发者如需自建预设，可参考包内的 `ptc-minimal.patch.yml`，执行器模块为 `dsh-minimal-ptc/gitbash-executor`。

| 执行器选项 | 默认值 | 作用 |
| :-- | :-- | :-- |
| `shellPath` | 自动探测 | 指定 Git Bash 路径 |
| `timeoutMs` | 120000 | 单次命令超时，毫秒 |
| `maxTimeoutMs` | 600000 | 允许请求的最长超时 |
| `maxOutputBytes` | 64000 | 单次输出上限 |
| `maxSpillBytes` | 67108864 | 输出落盘上限 |
| `graceMs` | 3000 | 超时后的退出宽限时间 |

## 排错

模式未出现时，先确认 DSH 为 0.1.7 及以上且安装后已重启。不要通过重建旧预设目录解决，新宿主不再从该目录发现预设。

若每个工具都报 `Cannot read properties of undefined (reading 'prepare')`，查看启动日志中的核心包冲突提示。应升级带入额外 `dsh-tools` / `cordis` 副本的插件并重新安装依赖；不要删除整个 `@deepseek-ai` 目录，官方的公共辅助包属于正常依赖。仍有问题时，记录宿主版本和启动错误，提交 issue；旧宿主的源码修补不应直接套用到新版本。

## 卸载

```bash
dsh plugin --profile web remove dsh-minimal-ptc
```

重启 Web 服务后生效。

## License

MIT
