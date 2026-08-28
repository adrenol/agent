# Code Style Goals

## Core principle

Write the simplest possible code that works correctly.

## Simplicity rules

- Prefer simple, straightforward solutions over clever or complex ones.
- Avoid unnecessary abstractions, patterns, or indirection.
- Do not introduce classes unless clearly needed.
- Do not over-engineer.
- Always organize growing code into small, purpose-based subfolders (e.g., `utils/`, `helpers/`, `config/`, `services/`, `types/`, `features/`) and split large files or mixed-responsibility modules into focused, single-responsibility files placed in the appropriate folder based on scope and reuse.
- Add simple TSDoc comments explaining code purpose.

## Readability

- Use clear, descriptive variable and function names.
- Keep functions small (ideally under 30 lines).
- Avoid nested logic deeper than 2 levels when possible.
- Prefer explicit code over implicit behavior.

## External endpoints

- You can send requests to external endpoints to inspect their response format.

## Constraints

- Do not modify `.env`.
- Do not use environment variables for non-secret configuration.
- Do not use git.
- Do not mention yourself in code

## Validation Rule

Always run `rtk bun run test` and `rtk bun run typecheck` after making code changes, before concluding the task. Never skip typechecking.

## RTK - Rust Token Killer

**Usage**: Token-optimized CLI proxy (60-90% savings on dev operations)

### Quick JS/TS Testing

When you need to run small JavaScript or TypeScript snippets for testing logic, regex, or simple functions, DO NOT create temporary files using bash commands (e.g., `cat > test.ts`).

Instead, ALWAYS execute the code inline using the `rtk bun -e '...'` command. Be careful with string quoting and escaping variables when passing the script directly in the terminal.

Example: `rtk bun -e 'const regex = /(^|\\P{L})name(\\P{L}|$)/vi; console.log(regex.test("name123"));'`

### Meta Commands (always use rtk directly)

```bash
rtk gain              # Show token savings analytics
rtk gain --history    # Show command usage history with savings
rtk discover          # Analyze your history for missed opportunities
rtk proxy <cmd>       # Execute raw command without filtering (for debugging)
```
