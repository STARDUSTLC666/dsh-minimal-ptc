**简体中文** · [English](README.en.md)

# Minimal PTC

**用极简提示与代码编排，完成多步工具任务。**

[![npm](https://img.shields.io/npm/v/dsh-minimal-ptc)](https://www.npmjs.com/package/dsh-minimal-ptc) [![downloads](https://raw.githubusercontent.com/STARDUSTLC666/dsh-suite/npm-downloads/assets/dsh-minimal-ptc-downloads.svg)](https://www.npmjs.com/package/dsh-minimal-ptc) [![total downloads](https://raw.githubusercontent.com/STARDUSTLC666/dsh-suite/npm-downloads/assets/dsh-minimal-ptc-total-downloads.svg)](https://www.npmjs.com/package/dsh-minimal-ptc)

**[安装使用](#安装) · [使用流程](#开始使用) · [完整说明](https://github.com/STARDUSTLC666/dsh-minimal-ptc/blob/main/docs/REFERENCE.zh.md)**

<picture>
  <source media="(prefers-color-scheme: dark) and (max-width: 640px)" srcset="https://raw.githubusercontent.com/STARDUSTLC666/dsh-minimal-ptc/main/docs/assets/intro/workflow-zh-mobile-dark.svg">
  <source media="(max-width: 640px)" srcset="https://raw.githubusercontent.com/STARDUSTLC666/dsh-minimal-ptc/main/docs/assets/intro/workflow-zh-mobile-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/STARDUSTLC666/dsh-minimal-ptc/main/docs/assets/intro/workflow-zh-dark.svg">
  <img src="https://raw.githubusercontent.com/STARDUSTLC666/dsh-minimal-ptc/main/docs/assets/intro/workflow-zh-light.svg" alt="用极简提示与代码编排，完成多步工具任务。 · 流程示意" width="100%">
</picture>

## 功能

- 在会话模式中选择独立预设。
- 使用官方 run_code 入口编排 TypeScript / Python 工具调用。
- 保留宿主执行模式与权限约束，并适配 Windows 终端。

## 安装

在 DSH 桌面版「插件」面板安装 `dsh-minimal-ptc`。已配置命令行时也可使用：

```bash
dsh plugin --profile desktop add dsh-minimal-ptc
```

网页版把 `desktop` 改为 `web`；安装后重启对应的 DSH。宿主要求以包声明 `>=0.2.1-rc.3` 为准。

## 开始使用

1. 安装到实际使用的 DSH profile，重启后创建新会话。
2. 在会话模式选择器中选择“极简 PTC 模式”。
3. 描述任务和目标工作区，由助手按预设使用 TypeScript / Python 编排工具；按需要准备对应运行时。
4. 核对工具结果和实际文件；需要其他能力时切换模式，不必额外安装整套 Suite。

可以这样说：

> 在这个工作区完成任务，先检查可用工具和运行环境，按当前模式的约束执行。

## 开始前要知道

这是会话预设；相应语言运行时与具体工具依赖仍需可用。

配置、完整工具与排错见[详细使用说明](https://github.com/STARDUSTLC666/dsh-minimal-ptc/blob/main/docs/REFERENCE.zh.md)。

## 插件更新

在工作台或原生插件详情页底部检查更新。默认自动检查，**默认不自动安装**；是否安装、何时重启由你决定。Suite 管理的组件随整包更新。[查看更新规则](https://github.com/STARDUSTLC666/dsh-minimal-ptc/blob/main/docs/REFERENCE.zh.md)。

## 文档

- [详细使用、配置与边界](https://github.com/STARDUSTLC666/dsh-minimal-ptc/blob/main/docs/REFERENCE.zh.md)
- [更新记录](https://github.com/STARDUSTLC666/dsh-minimal-ptc/blob/main/CHANGELOG.md)
- [验证范围与历史](https://github.com/STARDUSTLC666/dsh-minimal-ptc/blob/main/docs/VALIDATION.md)

## 反馈与贡献

如果插件帮到了你，欢迎 Star，让更多人发现它。问题和建议请提交 [Issues](https://github.com/STARDUSTLC666/dsh-minimal-ptc/issues)，也欢迎代码与文档 [PR](https://github.com/STARDUSTLC666/dsh-minimal-ptc/pulls)。反馈时附上版本与复现步骤，并移除凭据。

## License

[MIT](https://github.com/STARDUSTLC666/dsh-minimal-ptc/blob/main/LICENSE)

<a id="依赖与配置"></a>
