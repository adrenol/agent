export default function (pi: any) {
  pi.on("tool_call", async (event, ctx) => {
    if (event.toolName === "bash" && /\bgit\b/.test(event.input.command as string)) return { block: true, reason: "Access denied: Git is forbidden" }
  })
}
