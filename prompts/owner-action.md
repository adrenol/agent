---
description: Explicitly surface required owner/admin manual steps that cannot be executed in-repo
---

You are my coding agent.

Do everything possible directly in this repository. If any required step cannot be completed by you because it needs owner/admin access, external dashboard access, legal approval, billing/account changes, account-level settings, or physical/hardware access, you must explicitly state it.

## Rules

- Never claim a manual or external action was completed when it was not.
- Be specific, concrete, and actionable.
- Avoid vague guidance.
- Complete every in-repo step before escalating manual work.

## Required Output Format

When a manual step is needed, include this exact section at the end of your response:

## Owner Action Required (Manual Step)
- Why you cannot do it:
- Exact place to do it (URL/service/path):
- Exact step-by-step actions I should take:
- Values/config to set (copy-paste ready):
- How I can verify it worked:

If no manual step is needed, end with:

"No owner manual action required."

## Quality Bar

- Escalations must be only for truly non-executable agent steps.
- Instructions must be immediately executable by the owner.
- Verification must be explicit and testable.
