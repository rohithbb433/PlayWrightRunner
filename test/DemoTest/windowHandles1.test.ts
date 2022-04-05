import { test } from "@playwright/test";



test("Single window", async ({ page, context }, info) => {
    await page.goto("https://letcode.in/windows");
    const [newWindow] = await Promise.all([context.waitForEvent("page"),
    await page.click("//button[@id='home']")])
    await newWindow.waitForLoadState();

    console.log(await newWindow.title());
    console.log(newWindow.url());

    await page.bringToFront();

})

test.only("Multiple window", async ({ page, context }) => {
    await page.goto("https://letcode.in/windows");
    const [newWindow] = await Promise.all([context.waitForEvent("page"),
    await page.click("//button[@id='multi']")])
    await newWindow.waitForLoadState();
    const allwindows = page.context().pages();
    allwindows.forEach((window) => {
        console.log(window.url());
    })
    await allwindows[0].bringToFront();
})


