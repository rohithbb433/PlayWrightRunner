import * as User from "./../../User.json";
import { test, expect } from "./myFixture.test";


test.beforeEach(async ({ page }) => {
    await page.goto("https://letcode.in/");
})

test("Login_Functionality-Verify Text", async ({ loginPage, page }) => {
    await loginPage.loginIntoUI(User.userName, User.password);
    expect(await (await loginPage.getForgotPassElm())?.textContent()).toContain("Forgotten password");

})

