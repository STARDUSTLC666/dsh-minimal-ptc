
## alpha.3 执行器适配 / Executor compatibility

alpha.3 使用官方 PTC executor，在会话中只向模型暴露 run_code，并通过 SDK 保留已安装插件工具；旧宿主继续使用原来的 presentation 行。子代理发现入口按宿主能力选择，避免导入已移除的 list-agents 子路径。用户自行创建、没有本插件版本标记的预设目录仍不会被覆盖。

alpha.3 selects the native PTC executor; older hosts retain the legacy presentation provider. Child discovery avoids removed exports. Unmanaged custom preset directories remain untouched.
