import { Page } from "playwright";

export default class Login {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public getLoginElem = async () => await this.page.$('"Log in"');
    public getUserNameElm = async () => await this.page.$("input[name=email]");
    public getPasswordElm = async () => await this.page.$("input[name=password]");
    public getLoginButtonElem = async () => await this.page.$('"LOGIN"');
    public getForgotPassElm = async () => await this.page.$("//button[text()='Forgotten password?']");

    public async loginIntoUI(userName: string, pasword: string) {

        await (await this.getLoginElem())?.click();
        await this.page.waitForLoadState();
        await (await this.getUserNameElm())?.fill(userName);
        console.log(userName);
        await (await this.getPasswordElm())?.fill(pasword);
        console.log(pasword);
        await (await this.getLoginButtonElem())?.click();
    }
}
