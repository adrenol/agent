---
description: Analyze only logs/bot.log for errors and fix related issues (ignore warnings)
---

Analyze only the file `logs/bot.log`.

## Scope
- Focus exclusively on **error-level** issues.
- **Ignore all warning messages** (`warn`, `warning`, etc.).
- Do not review any other log files unless explicitly requested.

## Tasks
1. Parse `logs/bot.log` and identify distinct errors.
2. For each error, trace the likely source in the codebase.
3. Implement fixes for confirmed issues.
4. Re-check the log context to ensure fixes address the root cause.

## Output Format

1. **Error Summary**
   - Error signature/message
   - Frequency (if visible)
   - First relevant occurrence line/time

2. **Root Cause Analysis**
   - Probable source file/module
   - Why it fails

3. **Fix Implemented**
   - Files changed
   - What was changed and why

4. **Validation**
   - How the fix was verified
   - Any remaining risks or follow-ups

## Rules
- Ignore warn-level entries completely.
- Prioritize safe, minimal, production-ready fixes.
- Do not introduce unrelated refactors.
- Keep changes aligned with existing project patterns.