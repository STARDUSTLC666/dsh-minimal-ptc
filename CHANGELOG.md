# 更新记录

[返回简介](README.md) · [使用说明](docs/USAGE.md) · [验证记录](docs/VALIDATION.md)

[历史英文记录](docs/CHANGELOG.en.md)

## 0.6.5 (2026-10-29)

- 补齐中英文使用流程：准备、入口、具体操作与结果核对；新增累计 npm 下载徽章并保留月统计。
- Add practical getting-started workflows and lifetime npm download badges alongside monthly counts.

## 0.6.4 (2026-10-29)

- 同步仓库与 npm 的简明介绍、中英文 README 和反馈入口；本次为文档与包元数据更新。
- Sync npm descriptions and both README guides with the repository, including issue and pull-request links.

## 0.6.3 (2026-10-27)

- 修复分批更新时的新旧更新控件混用：保留原页面、草稿与安装保护，空闲后接管旧控制器，兼容旧入口。

## 0.6.2 (2026-10-27)

- 更新控件移至原有工作台或原生插件详情页底部；更新记录与选项原地展开，移除独立更新菜单与页面。
- 保留原页面操作与草稿，自动安装默认关闭；安装前确认，遇到未保存修改或运行任务时暂停。

## 0.6.1 (2026-10-27)

- Keep this component's own update entry visible when installed transitively through Suite. Confirm whole-Suite update scope before opening its controls.
- Keep automatic installation off by default and preserve independent installation behavior.

## 0.6.0 (2026-10-26)

- Add this plugin’s own update controls and independent preferences. Automatic installation stays off until explicitly enabled.
- Confirm manual installs, preserve local sources and disabled state, pause for tasks or unsaved changes, and use native DSH recovery without forced restarts.
- Require the public DSH 0.2.1-rc.3 update APIs; Suite components remain managed through Suite.

## 0.5.7（2026-10-26）

- 移除完整提示词覆盖，保留极简身份并由官方组合器追加工具 SDK、计划约束、网页不可信输入与 Ralph 使用规则。保留工作区 AGENTS 和可选上下文的既有默认开关。
- Windows 回归 25 项通过、1 项跳过；宿主与未验收范围见[本次记录](docs/validation-0.5.7.md)。

## 0.5.6 (2026-10-17)

- 修复固定完整提示词覆盖 PTC 工具清单与执行说明的问题：保留极简人格，调用宿主官方 SDK 生成器，模型能看到当前可调用工具的参数和返回类型。
- 按宿主执行模式切换默认函数体与持久 REPL 指引；工具启停后重新生成，不捆绑额外核心运行时，也不增加模型调用。
- 完整提示词不对工具说明中的花括号进行变量插值，继续关闭工作区与可选运行时上下文。验证范围见 [本次记录](docs/validation-0.5.6.md)。

## 0.5.5 (2026-10-15)

- 修复 DSH 0.2.1-alpha.3 移除子代理 `toolFilter` 后预设挂载失败；子代理仍由官方定时工具拒绝使用提醒，主代理保持定时能力。
- 提供可直接复制使用的官方 Node 持久执行覆盖补丁与中英文指引，需 DSH 0.2.1-alpha.3 及以上；默认仍为每次独立执行。
- 明确持久模式的返回值、变量重声明和状态清理行为；读图、自动压缩与 `/compact` 保留官方宿主实现。

## 0.5.4 (2026-10-05)

- 修复新版 DSH 并行启动时，定时服务就绪较晚导致整套极简 PTC 预设“加载失败”的问题。现在等待服务激活，再通过宿主加载官方定时工具；旧版宿主不会导入缺失的模块。

## 0.5.3 (2026-10-05)

- 对齐官方 dsh-v0.2.1-alpha.1 PTC 的定时任务工具与子代理禁止调度规则，保留固定一句提示词、Windows Git Bash 和持久 PowerShell。

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
