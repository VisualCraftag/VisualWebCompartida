import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

test("Hostinger build does not load Vercel Analytics", async () => {
  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8")
  const packageJson = JSON.parse(
    await readFile(new URL("../package.json", import.meta.url), "utf8")
  )

  assert.equal(layout.includes("@vercel/analytics"), false)
  assert.equal(layout.includes("<Analytics"), false)
  assert.equal(packageJson.dependencies?.["@vercel/analytics"], undefined)
})
