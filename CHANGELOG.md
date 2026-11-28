# 更新记录

## 0.6.25 (2026-11-28)

- 更新详情页现在会保留较新检查的结果，慢轮询返回时不再把版本或任务状态退回旧值。
- Keep newer update-check results and job status when an older background request finishes later.

## 0.6.24 (2026-11-25)

- 启动执行器前校验 stdoutMaxBytes 必须为 1 到 4 MiB 的整数。
- Limit stdoutMaxBytes to an integer from 1 to 4 MiB before spawning the executor.


## 0.6.23 (2026-11-23)

- 修正 `docs/USAGE` 中关于 `workflow-ptc` 引擎与通用 `tool-workflow` 关闭状态，以及旧宿主目录物化（DSH `>=0.2.2-rc.3` 跳过）的两处表述矛盾。
- 移除 `README` 中不存在的工作台更新入口描述（改为原生插件详情页底部），并修正 `docs/REFERENCE` 语言链接与兼容更新策略文案。
- Resolve contradictions in bilingual `USAGE` docs (`workflow-ptc` engine vs disabled `tool-workflow`; legacy-only preset directory materialization), remove nonexistent workbench wording in `README`, and fix `REFERENCE` links and update wording.

## 0.6.22 (2026-11-20)

- 兼容当前官方 Harness ShellExecutor.execute 及可观察任务句柄，恢复 run_code 嵌套 bash 调用；保留旧 run/start 入口与取消、卸载清理。
- 使用实际官方宿主验证 run_code 到 Shell 的跨工具执行链。

## 0.6.21 (2026-11-20)

- 升级共享更新组件至 0.2.10，移除跨插件右下角浮动提醒，保留工作台及插件详情页更新控制。

- 卸载时同时终止前台和后台 Shell，旧执行器拒绝卸载后调用；提前取消不再启动进程。

## 0.6.20 (2026-11-20)

- 维护验收：重新验证预设物化、Git Bash 执行器、沙箱策略门、进程清理与宿主注册契约，保持现有预设行为。
- Maintenance verification covers preset materialization, the Git Bash executor, sandbox policy checks, process cleanup, and host registration while preserving existing preset behavior.
- 同步共享更新组件 0.2.9，修复取消窗口和失败响应清理，并确保运行中旧协调器在空闲后接管修复。

## 0.6.19 (2026-11-20)

- 升级共享更新组件至 `@stardustlc/dsh-updates@0.2.7`：对话页「有新版本」提醒浮卡支持无交互 15 秒自动收起（悬停、聚焦、查看记录或确认弹窗时自动暂停，安装成功提示 6 秒收起，安装中/失败/需要重启仍保持常驻不隐藏）。
- Upgrade `@stardustlc/dsh-updates` to `0.2.7`: auto-dismiss idle update reminder cards after 15s and silent complete cards after 6s while pausing on hover/focus/notes/dialogs and keeping active, failed, or restart-required cards pinned.

## 0.6.18 (2026-11-20)

- 升级共享更新组件至 `@stardustlc/dsh-updates@0.2.6`：端到端验收修复浮卡与日历按钮重叠、详情页/工作台挂载时瞬时让位及 `package-moved` / 包管理器报错诊断文案，继续保持过期检查自动刷新与 `bundle-in-use` 指导。
- Upgrade `@stardustlc/dsh-updates` to `0.2.6`: E2E-verified fixes for floating Calendar FAB clearance, immediate reminder yield on native detail/workbench mount, and clearer `package-moved` / package-manager error messages, alongside auto-refresh and `bundle-in-use` guidance.

## 0.6.17 (2026-11-18)

- 升级共享更新组件至 `@stardustlc/dsh-updates@0.2.5`：独立安装插件详情页底栏去重（保留组合包组件委派与对话页热更新卡片），补齐 `bundle-in-use` 组合包占用提示说明，并在检查结果过期或远端版本变更时自动刷新元数据，彻底消除 `check-first` 卡顿。
- Upgrade `@stardustlc/dsh-updates` to `0.2.5`: deduplicate standalone native plugin detail footers while keeping Suite delegation and in-chat reminder cards, surface clear `bundle-in-use` guidance, and automatically refresh expired update checks without `check-first` stalls.

## 0.6.16 (2026-11-18)

- 升级共享更新组件至 `@stardustlc/dsh-updates@0.2.4`：对话页新增一键热更新提醒卡片，自动检查周期缩短至 6 小时，手动热更新后可顺手开启包含兼容功能小版本的空闲自动更新。
- Upgrade `@stardustlc/dsh-updates` to `0.2.4`: add an actionable in-chat hot-update reminder card, 6-hour background update checks, compatible minor+patch idle auto-updates, and a post-update opt-in prompt.

## 0.6.15 (2026-11-18)

- 同步 `@stardustlc/dsh-updates` 0.2.3：侧边栏工作台平时默认隐藏底部更新栏（零高度占用），仅在检测到兼容新版本或执行更新时浮现单行精简提示条；完整更新设置与检查入口统一保留在 DSH「插件」详情页底部。
- Sync `@stardustlc/dsh-updates` 0.2.3: keep the sidebar workbench update footer hidden by default when up-to-date, surfacing a single-line compact strip only for actionable updates or active jobs while retaining full controls in native Plugin Details.

## 0.6.14 (2026-11-18)

- 更新区底部新增克制、无打扰的 GitHub 点赞与问题反馈快捷链接，并完善中英文检索关键词。
- Add subtle, non-intrusive GitHub Star and issue feedback links in the update footer, and expand search keywords.

## 0.6.13 (2026-11-18)

- 同步 `@stardustlc/dsh-updates` 0.2.1：恢复 Suite 整包统一更新（移除独立拆包迁移），保留整包与独立插件的原地热更新与失败自动回滚。
- Sync `@stardustlc/dsh-updates` 0.2.1: restore unified Suite bundle updates (removing standalone conversion) while retaining in-place hot reload and automatic rollback.

## 0.6.12 (2026-11-18)

- 深度适配 DSH 0.2.2：补齐主包与子模块双语元数据及图标导出；加固异步加载与后台 Git Bash 进程的 `ctx.effect` 生命周期回收，跳过 Windows WSL 占位 `bash.exe` 并修复进程终止后定时器滞留。
- Deeply adapt to DSH 0.2.2: add bilingual locale metadata and icon exports across entrypoints; harden `ctx.effect` cleanup for async schedule loading and background Git Bash shells, skip Windows WSL stub `bash.exe`, and dispose timeout timers on kill.

## 0.6.11 (2026-11-17)

- 在原生插件详情页单独检查和安装兼容版本。自动安装默认关闭，可为该插件开启空闲时的稳定补丁更新。
- Check and install compatible versions separately from the native plugin details. Automatic installation is off by default. Enable it for this plugin to apply stable patches while idle.

## 0.6.10 (2026-11-14)

- 适配 DSH 0.2.2-rc.3：预设的委派配置对齐当前宿主——删除已下线的 `.../list-agents` 行，子代理改用 `modelSelection` / `modelDiscovery`，移除已删除的 `backgroundMode`，并按内置预设关闭 `interrupt_agent`；最低 Harness 声明提升至 0.2.2-rc.3。
- Support DSH 0.2.2-rc.3: align the preset delegation rows with the current host — drop the retired `.../list-agents` row, use `modelSelection` / `modelDiscovery`, remove the deleted `backgroundMode` key and disable `interrupt_agent` like the built-in presets; raise the minimum Harness declaration to 0.2.2-rc.3.

## 0.6.9 (2026-11-04)

- 同步共享界面：嵌入设置时继承宿主底色，输入框跟随主题，空状态保持可读宽度；新版 DSH 可显示插件设置图标。
- Align embedded surfaces, themed inputs, readable empty states and optional native settings icons.
- 适配 alpha.3 的原生 PTC executor 与子代理发现入口，保留旧宿主兼容分支。
- Use alpha.3 PTC executor and child discovery APIs with legacy-host branches retained.


## 0.6.8 (2026-11-03)

- 自建预设目录的警告点名目录并给出两条出路；使用说明补齐物化校验。
- The unmanaged preset warning names the directory and offers two ways out; docs explain how to verify materialization.

## 0.6.7 (2026-10-30)

- 重整中英文首页：用途、三步流程图、安装入口与操作示例；详细配置与边界集中到完整说明。
- 保留下载统计、独立更新选择、问题反馈和贡献入口；原封面与运行功能保留。
- Refresh bilingual landing pages, workflow artwork, quick starts and reference navigation.


## 0.6.6 (2026-10-30)

- 原生插件列表与详情新增专门生成的鲸鱼娘图标：大头像、独立功能符号、透明留白，适合 30 / 36 px 显示；原封面保留。
- Add purpose-made whale-girl artwork with a distinct function emblem, transparent padding and small-size readability; preserve the original cover.


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
