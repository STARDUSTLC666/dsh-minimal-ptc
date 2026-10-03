# dsh-minimal-ptc

[English](README.en.md)

![dsh-minimal-ptc 鲸鱼娘插件封面](https://raw.githubusercontent.com/STARDUSTLC666/dsh-minimal-ptc/main/assets/cover-whale-girl.png)

把官方极简提示词与 PTC 编排组合起来，提供完整插件工具和 Windows 终端适配。

[![npm](https://img.shields.io/npm/v/dsh-minimal-ptc)](https://www.npmjs.com/package/dsh-minimal-ptc) [![downloads](https://img.shields.io/npm/dm/dsh-minimal-ptc)](https://www.npmjs.com/package/dsh-minimal-ptc)

## 功能

- 以官方 run_code 入口编排多步工具调用。
- 保留文件、检索、技能、计划、目标和子代理能力。
- Windows 提供 Git Bash 与官方持久 PowerShell。

## 安装

桌面版可在「插件」面板按包名 `dsh-minimal-ptc` 安装。已配置 dsh 命令时也可使用：

```bash
dsh plugin --profile desktop add dsh-minimal-ptc
```

网页版把命令中的 `desktop` 改为 `web`。安装后重启 DSH。

## 开始使用

安装后重启 DSH，新建会话，在模式选择器中选择「极简 PTC 模式」，然后描述任务。

## 依赖与配置

使用官方声明式预设接口。Windows 的 Git Bash 需要 Git for Windows；与官方 PTC 的扩展差异见使用说明。

详细配置、工具参数与排错见[使用说明](docs/USAGE.md)。从源码独立开发时，Node 要求以 [package.json](package.json) 为准。

## 文档

- [使用与排错](docs/USAGE.md)
- [更新记录](CHANGELOG.md)
- [验证范围与历史记录](docs/VALIDATION.md)
- [问题反馈与功能建议](https://github.com/STARDUSTLC666/dsh-minimal-ptc/issues)

## License

[MIT](LICENSE)
