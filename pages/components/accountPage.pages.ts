import {expect, Locator, Page} from '@playwright/test';

export class AccountPage {
    page: Page;
    forgotPasswordLink: any;
    forgotPasswordHeadTxt: any;
    loginNameReset: Locator;
    emailAddReset: Locator;
    continueButton: Locator;
    forgotLoginLink: Locator;
    forgotLoginNameHeadTxt: Locator;
    forgotLastNameLog: Locator;
    forgotEmailLog: Locator;
    continueButton_Log: Locator;
    loginLinkFootr: Locator;
    accountLoginHead: Locator;
    registerAccountButton: Locator;
    continueRegButton: Locator;

    
    
    constructor(page: Page) {
        this.page = page;
        this.forgotPasswordLink = page.getByRole('link', {name: 'Forgot your password'});
        this.forgotPasswordHeadTxt = page.getByRole('heading', {name: ' Forgot Your Password?'});
        this.loginNameReset = page.locator('#forgottenFrm_loginname');
        this.emailAddReset = page.locator('#forgottenFrm_email')
        this.continueButton = page.getByRole('button', {name: 'Continue'});
        this.forgotLoginLink = page.getByRole('link', {name: 'Forgot your login?'})
        this.forgotLoginNameHeadTxt = page.getByRole('heading', {name: ' Forgot Your Login Name?'});
        this.forgotLastNameLog = page.locator('#forgottenFrm_lastname');
        this.forgotEmailLog = page.locator('#forgottenFrm_email');
        this.continueButton_Log = page.getByRole('button', {name: 'Continue'})
        this.loginLinkFootr = page.getByRole('link', {name: 'Login'});
        this.accountLoginHead = page.getByRole('heading', {name: " Account Login"});
        this.registerAccountButton = page.getByRole('button', {name: ' Register Account '});
        this.continueRegButton = page.getByRole('button', {name: 'Continue'});
    }
    async navigateAcct() {
        await this.page.goto('https://automationteststore.com/index.php?rt=account/login');
    }
    async passwordReset() {
        await this.loginNameReset.fill('James St.Patrick');
        await this.emailAddReset.fill('james.stpatrick1723@icloud.com');
        await this.continueButton.click();
    }
    async loginReset() {
        await this.forgotLastNameLog.fill('St. Patrick');
        await this.forgotEmailLog.fill('james.stpatrick1723@icloud.com');
        await this.continueButton_Log.click();
    }
    async navigateMain() {
        await this.page.goto('https://automationteststore.com');
    }
    async registerForm() {

    }
}