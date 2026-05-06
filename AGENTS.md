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
