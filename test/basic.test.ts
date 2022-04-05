import { expect, test } from "@playwright/test";

test("Basic", async ({ page }) => {
    await page.goto("https://letcode.in/");
    expect(await page.title()).toContain("Let");
})