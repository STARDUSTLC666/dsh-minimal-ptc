# 0.5.7 验证记录

日期：2026-10-26。官方 Windows 宿主：DSH 0.2.1-rc.3。

## 行为变化

移除完整提示词覆盖，保留极简身份并由官方组合器追加工具 SDK、计划约束、网页不可信输入与 Ralph 使用规则。保留工作区 AGENTS 和可选上下文的既有默认开关。

## 验证与限制

- Windows 本地：26 项，25 通过、1 跳过；没有把跳过计为通过。
- 官方 RC.3 切换 /plan on/off，检查工具 SDK 仅出现一次、原生提示存在，实际 run_code 返回 42。Windows 跳过 1 项非本平台检查；未评测模型自主规划质量。
- GitHub 的跨平台 CI 和 npm 发布完整性以该版本工作流及 registry 为准；本记录不把本地测试等同于已发布。

## English

The minimal identity no longer replaces the complete host prompt. Native SDK, plan restrictions, web-input guidance and Ralph rules compose normally; existing workspace AGENTS and optional-context defaults remain.

Runtime/account limits are listed above. Synthetic peers and model adapters do not establish live account delivery or model quality.
