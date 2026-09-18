# dsh-minimal-ptc

![npm](https://img.shields.io/npm/v/dsh-minimal-ptc) ![downloads](https://img.shields.io/npm/dm/dsh-minimal-ptc) ![license](https://img.shields.io/github/license/STARDUSTLC666/dsh-minimal-ptc) ![stars](https://img.shields.io/github/stars/STARDUSTLC666/dsh-minimal-ptc?style=social)

> 极简提示词 × PTC 全能力 —— 一个更"干净"的编码 Agent。
> 安装即获得新的 Agent 模式：**极简 PTC 模式**；Windows 自动启用 Git Bash 与持久 PowerShell，兼容 Harness 0.1.5-rc.2 和 0.1.6-alpha.1。

## 卖点

- **对齐 RL 训练**：系统提示词只有一句 `You are a helpful software engineer assistant.`，
  贴近 RL 微调时的简洁指令分布，没有长提示词带来的格式偏置与上下文噪音，
  让模型按训练时的节奏干活。
- **PTC 工具面完整**：提供 `run_code` SDK 多步编排、文件读写与检索、Shell、
  Skills、计划、目标、子代理、Ralph 与网页搜索/抓取；按 alpha.4 默认隐藏通用 workflow 工具。
- **We / Let's 思维链**：PTC SDK 把"想"和"做"装进一个 TypeScript 程序，
  多步操作先编排、再一次执行。这与 DeepSeek 官方跑分环境（Project2 V4.1b）中
  Minimal 高分轨迹一致：99/96 的两跑以 `we` / `let's` 为主，而不是
  Standard/PTC 常见的 `let me` / `I` 长块。
- **Windows 保持 bash**：预设内置 Git Bash executor（自动探测 GIT_BASH → Program Files\Git → LOCALAPPDATA\Git → PATH），`bash` 工具不再在 Windows 上被禁用。
- **Windows 持久 PowerShell**：对齐 `dsh-v0.1.5-rc.1` 的 minimal 预设，`pwsh` 使用持久 PTY 会话，cwd、变量、函数跨调用保留。

## 兼容性

已在官方源码构建的 Harness `0.1.5-rc.2` 和 `0.1.6-alpha.1` 上验证（2026-09-16）：18 个组件与 ModLens 同载，工具 schema、技能注册、离线只读调用、真实 Agent 预设挂载及 `run_code` 调用插件工具通过。采用 `cordis.patch.yml` + `dsh.bundle.patch` 组合包模型。Node 要求为 22.19 及以上的 22.x，或 24 及以上。外部服务的实际业务操作需按各组件配置单独验证。

0.4.6 起，插件等待宿主启动完成后选择工作流运行时：0.1.6 使用 `workflow-ptc`，0.1.5 保留 `workflow-worker-thread`。受管理的预设会在插件版本或运行时种类变化时刷新；同版本、同运行时的本地修改以及无版本标记的自建预设保持不变。0.4.7 起预设补齐官方 0.1.6 `ptc` 的 `present` / `command-goal` / `tool-plugin-manager`（默认关闭）行与 subagent 的 `modelSelectionSettings`，并新增启动健康检查（见下文故障排查）。

另已在真实 agent 中挂载极简 PTC 预设并组装模型工具：模型入口为 `run_code`，安装的插件工具和 Windows Git Bash 均可用。沿用 0.1.3 起的 persona `prefix` 字段；更旧的 Harness 请使用插件 0.4.3。0.4.5 起，预设更新标记自动读取包版本，避免升级后仍保留旧预设。

## 安装

1. 把本包加入 web profile（`package.json`）：

   ```json
   "dependencies": { "dsh-minimal-ptc": "^0.4.0" },
   "dsh": { "profile": { "bundles": [..., "dsh-minimal-ptc"] } }
   ```

   本地开发也可以用 link：`"dsh-minimal-ptc": "link:E://deepseek//dsh-minimal-ptc"`。

2. 在 profile 目录执行 `pnpm install`。

3. 重启 web profile 进程：宿主行会把内置预设物化到
   `$DSH_HOME/.agent-presets/ptc-minimal`。

4. 新建会话时选择 **极简 PTC 模式**。

## 故障排查：`Cannot read properties of undefined (reading 'prepare')`

每次工具调用（含 `run_code`）都以这个错误失败、且会话在挂载期一切正常时，根因是 **dsh-tools 的调度器键（一个 Symbol）在进程内出现了两个身份**。两个已确认的触发路径：

1. **profile 里多装了一份核心包**：某个第三方插件把 `@deepseek-ai/*` 写进了 `dependencies`（应为 `peerDependencies`）、tarball 安装拖入传递副本，或旧 `node_modules` 残留。检查：

   ```bash
   # 任一命令有输出即为中招（应为空）
   ls ~/.dsh/profiles/*/node_modules/@deepseek-ai 2>/dev/null
   ```

   修复：把该 profile `node_modules` 下的 `@deepseek-ai` 目录移走（或整改插件依赖后重装），重启 dsh。

2. **0.1.6-alpha 宿主自身的双构建产物**：`@deepseek-ai/dsh-tools` 的 exports 把 `./types`、`./presentation` 子路径指向第二套编译输出（`lib/types/*.js`），与打包产物 `lib/index.js` 并存时调度器键同样分裂——即使没有装任何多余副本也会中招。根治办法是把 `packages/core/tools/src/index.ts` 里的

   ```ts
   Symbol('@deepseek-ai/dsh-tools.scheduler')  →  Symbol.for('@deepseek-ai/dsh-tools.scheduler')
   ```

   `Symbol.for` 走全局符号注册表，跨模块实例恒等，两类触发路径同时免疫。

**本插件自 0.4.7 起在启动时自动体检**：发现 profile 内核心包副本、或宿主仍使用模块本地 Symbol 键（未打上述补丁）时，会在日志里给出对应警告与修复指引（只警告，不阻断启动）。

## 卸载

```bash
dsh plugin --profile web remove dsh-minimal-ptc
```

卸载后重启 Web 服务。如需彻底清理，可再手动删除自己 profile `cordis.patch.yml` 中覆盖的插件行。


## Windows Git Bash 配置

预设内置的 Git Bash executor 可在 `agent.cordis.yml` 的 `gitbash-executor` 行覆盖：

| 配置 | 默认 | 说明 |
| :-- | :-- | :-- |
| `shellPath` | 自动探测 | 固定 Git Bash 路径（如 `C:\\Program Files\\Git\\bin\\bash.exe`） |
| `timeoutMs` | 120000 | 单次命令超时（毫秒） |
| `maxTimeoutMs` | 600000 | 请求可要求的最大超时 |
| `maxOutputBytes` | 64000 | 单次输出上限 |
| `maxSpillBytes` | 67108864 | 输出溢出落盘上限 |
| `graceMs` | 3000 | 超时后的宽限时间 |

自动探测顺序：`GIT_BASH` → `Program Files\\Git` → `Program Files (x86)\\Git` → `LOCALAPPDATA\\Programs\\Git` → PATH。

## 目录结构

```
dsh-minimal-ptc/
├── cordis.patch.yml              # 插入宿主行（物化预设）
├── lib/index.js                  # 宿主插件：物化 ptc-minimal 预设到用户预设根目录
└── presets/ptc-minimal/          # 内置 Agent 模式（极简提示词 + PTC 全能力）
    ├── agent.cordis.yml
    ├── gitbash-executor.mjs      # Windows Git Bash 探测与执行器（零依赖）
    └── preset.yml
```

## 说明

- 物化策略：目标目录不存在时写入全部文件；插件版本或宿主运行时种类变化时刷新受管理文件；无标记的自建预设不覆盖。
- 升级插件只需更新 `package.json` 的版本；预设标记自动读取该版本。

## 许可证

MIT
