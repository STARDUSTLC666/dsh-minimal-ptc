# dsh-minimal-ptc

[English](README.en.md)

![dsh-minimal-ptc 鲸鱼娘插件封面](https://raw.githubusercontent.com/STARDUSTLC666/dsh-minimal-ptc/main/assets/cover-whale-girl.png)

把官方极简提示风格与 Python / TypeScript PTC 工具编排组合成 DSH 预设。提供插件工具和 Windows 终端适配，并保留宿主的计划模式、网页不可信内容与工具使用约束。

[![npm](https://img.shields.io/npm/v/dsh-minimal-ptc)](https://www.npmjs.com/package/dsh-minimal-ptc) [![downloads](https://raw.githubusercontent.com/STARDUSTLC666/dsh-suite/npm-downloads/assets/dsh-minimal-ptc-downloads.svg)](https://www.npmjs.com/package/dsh-minimal-ptc) [![total downloads](https://raw.githubusercontent.com/STARDUSTLC666/dsh-suite/npm-downloads/assets/dsh-minimal-ptc-total-downloads.svg)](https://www.npmjs.com/package/dsh-minimal-ptc)

[下载统计说明](https://github.com/STARDUSTLC666/dsh-suite/blob/npm-downloads/README.md)

欢迎使用，遇到问题或有改进建议，请提交 [issues](https://github.com/STARDUSTLC666/dsh-minimal-ptc/issues) 和 [PR](https://github.com/STARDUSTLC666/dsh-minimal-ptc/pulls)。

## 功能

- 以官方 run_code 入口编排多步工具调用。
- 保留极简人格，按当前工具和执行模式生成官方 SDK 说明。
- 保留文件、检索、技能、计划、目标和子代理能力。
- Windows 提供 Git Bash 与官方持久 PowerShell。

## 安装

桌面版可在「插件」面板按包名 `dsh-minimal-ptc` 安装。已配置 dsh 命令时也可使用：

```bash
dsh plugin --profile desktop add dsh-minimal-ptc
```

网页版把命令中的 `desktop` 改为 `web`。安装后重启 DSH。

## 开始使用

1. 安装到实际使用的 DSH profile，重启后创建新会话。
2. 在会话模式选择器中选择“极简 PTC 模式”。
3. 描述任务和目标工作区，由助手按预设使用 TypeScript / Python 编排工具；按需要准备对应运行时。
4. 核对工具结果和实际文件；需要其他能力时切换模式，不必额外安装整套 Suite。

## 依赖与配置

使用官方声明式预设接口。Windows 的 Git Bash 需要 Git for Windows；与官方 PTC 的扩展差异见使用说明。

详细配置、工具参数与排错见[使用说明](docs/USAGE.md)。从源码独立开发时，Node 要求以 [package.json](package.json) 为准。

## 文档

- [使用与排错](docs/USAGE.md)
- [更新记录](CHANGELOG.md)
- [验证范围与历史记录](docs/VALIDATION.md)
- [问题反馈与功能建议](https://github.com/STARDUSTLC666/dsh-minimal-ptc/issues)

## 插件更新

需要 DSH 0.2.1-rc.3 或更新版本。更新控件直接位于原有工作台内容末尾；没有工作台的插件，位于原生插件详情页底部。检查、更新记录和偏好在原地展开，不增加独立更新页面或设置菜单。自动检查默认开启；**自动安装默认关闭**，明确授权后才会在空闲且没有未保存修改时安装兼容的稳定补丁。开关按插件独立保存，可关闭、推迟或忽略提醒；不会强制重启 DSH、升级 DSH 本体或替换本地源码安装。Suite 组件在当前页面底部明确说明并操作 Suite 整包更新。

旧版用户先在官方插件管理中手动更新一次，之后才会获得此入口。发布到 npm 不会直接替换用户已经安装的版本。

## License

[MIT](LICENSE)
