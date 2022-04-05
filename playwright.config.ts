import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
    timeout: 100000,
    workers: process.env.CI ? 1 : undefined,
    use: {
        headless: false,
        channel: "chrome",
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        screenshot: "on",
        video: 'on',
        baseURL: "https://letcode.in/"
        // extraHTTPHeaders: {
        //     "Authorization" : "Basic userName:Password in Bases64Formate"
        // }
    },
    testMatch: ["test/APITesting/APICall.test.ts"],
    retries: 2,
    reporter: [["allure-playwright"]]
    // reporter: [["html", {
    //     open: 'always'
    // }]]
};
export default config;