[English](README.en.md)

# dsh-minimal-ptc

## 0.5.1 更新（2026-09-27）

补齐 tools 服务依赖声明，让启动健康检查可以在新版 Cordis 宿主中读取工具调度器。

验证宿主：官方源码构建的 Harness 0.1.7-rc.2（保留本地工具调度器修复）。构建与自动测试通过；实际操作和外部服务限制见本轮验收记录。

给 DeepSeek Harness 添加「极简 PTC 模式」：使用简短的系统提示词，保留文件、终端、搜索、技能与已安装插件，通过 `run_code` 编排多步操作。Windows 支持 Git Bash 和持久 PowerShell。

## 安装和使用

0.5.0 需要 **Harness 0.1.7 及以上**。仍使用 Harness 0.1.5/0.1.6 时，请安装 `dsh-minimal-ptc@0.4.7`。

```bash
dsh plugin --profile web add dsh-minimal-ptc
```

重启 `dsh web`，新建会话，在输入框上方的模式列表中选择 **极简 PTC 模式**，然后像平时一样描述任务。无需创建预设目录或修改 YAML。

例如：「检查这个项目的测试，找出失败原因并修复。」已有的邮件、日历等插件也可按原来的方式使用。

## 0.5.0 的变化

- 使用 Harness 0.1.7 官方的声明式 Agent 预设注册方式，修复升级后模式消失的问题。
- 预设随插件安装和更新；保留用户旧的 `.agent-presets/ptc-minimal` 目录，不覆盖其中的自定义内容。
- 启动检查只提示会影响工具运行的核心包副本，不再把 `schemastery`、`cosmokit` 等正常依赖误报为冲突。
- 使用新版 `workflow-ptc`，保留插件工具、Git Bash、持久 PowerShell、搜索、计划、目标与子代理能力。

## 兼容性与验证

2026-09-23 在官方源码构建的 **Harness 0.1.7-alpha.2** 上验证（含本地工具调度器 `Symbol.for` 修复）：18 个插件同载，工具契约与技能注册通过；极简 PTC 出现在实际网页模式列表中并可选择，真实 Agent 挂载后以 `run_code` 为模型入口，保留插件工具与 Shell。

已在沙箱开启的 Windows 隔离工作区通过 `run_code` 实际调用 RSS 插件，重启后再次通过。测试工作区由当前用户拥有完整管理权限，以便宿主设置沙箱权限；外部邮箱、数据库等业务仍需各插件的有效配置。

Node 要求为 22.19 及以上的 22.x，或 24 及以上。

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

若每个工具都报 `Cannot read properties of undefined (reading 'prepare')`，查看启动日志中的核心包冲突提示。应升级带入额外 `dsh-tools` / `cordis` 副本的插件并重新安装依赖；不要删除整个 `@deepseek-ai` 目录，官方的公共辅助包属于正常依赖。另一个已确认原因是宿主同时加载两份工具构建产物且调度器键使用模块局部 `Symbol`；源码构建可将其改为 `Symbol.for('@deepseek-ai/dsh-tools.scheduler')` 后重新构建。

## 卸载

```bash
dsh plugin --profile web remove dsh-minimal-ptc
```

重启 Web 服务后生效。

## License

MIT
