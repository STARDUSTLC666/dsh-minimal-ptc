# Historical release notes

[Current changelog](../CHANGELOG.md) · [Overview](../README.en.md)

These English notes preserve the earlier translations. The main changelog contains the consolidated version history.

## 0.5.1 (2026-09-27)

Declares the tools service dependency so the startup health check can inspect the tool scheduler on the current Cordis host.

Validation host: Harness `0.2.0-rc.1` built from official sources (commit `407e65c8`) with Node `24.16.0` on 2026-09-28. All 18 plugin tests pass in an isolated environment; all 18 plugins mount together in one host registering 0 tools, with tool schemas and health-check contracts passing. No live ports or external services were exercised in this round.

Adds **Minimal PTC** to DeepSeek Harness: a concise system prompt with files, terminals, search, skills and installed plugin tools, orchestrated through `run_code`. Windows includes Git Bash and persistent PowerShell.
