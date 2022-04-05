import { Page, test, BrowserContext } from "@playwright/test";

test.describe("Window Handles", () => {
    let page: Page;
    let context: BrowserContext;
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://letcode.in/windows");
    })

    test.skip("Single window", async ({ }) => {
        const [newWindow] = await Promise.all([context.waitForEvent("page"),
        await page.click("//button[@id='home']")])
        await newWindow.waitForLoadState();

        console.log(await newWindow.title());
        console.log(newWindow.url());

        await page.bringToFront();

    })

    test.only("Multiple window", async ({ }) => {
        const [newWindow] = await Promise.all([context.waitForEvent("page"),
        await page.click("//button[@id='multi']")])
        await newWindow.waitForLoadState();
        const allwindows = page.context().pages();
        allwindows.forEach((window) => {
            console.log(window.url());
        })
        await allwindows[0].bringToFront();
    })
    test.afterAll(async () => {
        await page.close();
        await context.close();
    })

})