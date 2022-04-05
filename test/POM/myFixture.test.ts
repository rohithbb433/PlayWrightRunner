import { test as baseTest } from "@playwright/test";
import Login from "./LoginElememts.test"

const fixture = baseTest.extend<{
    loginPage: Login;
}>({
    loginPage: async ({ page }, use) => {
        await use(new Login(page));
    },
})

export const test = fixture;
export const expect = fixture.expect;
