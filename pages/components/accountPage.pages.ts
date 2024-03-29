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
    registerFirstName: Locator;
    registerLastName: Locator;
    registerEmail: Locator;
    registerPhoneNum: Locator;
    registerCompany: Locator;
    registerAddress_: Locator;
    registerCity: Locator;
    registerRegState: Locator;
    registerZipcode: Locator;
    registerCountry: Locator;
    registerLoginNam: Locator;
    registerPassWord: Locator;
    registerPassWordConf: Locator;
    registerSubsButton: Locator;
    registerAgreeTerms: Locator;
    registerContinBtn: Locator;
    accountCreatedHead: Locator;
    loginOrRegistLink: Locator;
    orderHistButton: Locator;
   

    
    
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
        this.loginOrRegistLink = page.getByRole('link', {name: 'Login or register'});
        this.accountLoginHead = page.getByRole('heading', {name: " Account Login"});
        this.registerAccountButton = page.getByLabel('Register Account');
        this.continueRegButton = page.getByRole('button', {name: 'Continue'});
        this.registerFirstName = page.locator('#AccountFrm_firstname');
        this.registerLastName = page.locator('#AccountFrm_lastname');
        this.registerEmail = page.locator('#AccountFrm_email');
        this.registerPhoneNum = page.locator('#AccountFrm_telephone');
        this.registerCompany = page.locator('#AccountFrm_company');
        this.registerAddress_ = page.locator('#AccountFrm_address_1');
        this.registerCity = page.locator('#AccountFrm_city');
        this.registerRegState = page.locator('#AccountFrm_zone_id');
        this.registerZipcode = page.locator('#AccountFrm_postcode');
        this.registerCountry = page.locator('#AccountFrm_country_id');
        this.registerLoginNam = page.locator('#AccountFrm_loginname');
        this.registerPassWord = page.locator('#AccountFrm_password');
        this.registerPassWordConf = page.locator('#AccountFrm_confirm');
        this.registerSubsButton = page.getByLabel('No');
        this.registerAgreeTerms = page.locator('#AccountFrm_agree');
        this.registerContinBtn = page.getByRole('button', {name: ' Continue '});
        this.orderHistButton = page.getByRole('link', {name: ' Order history'});
        

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
    async registerForm(name: string, email: string, address: string, city: string, state: string, zipcode: string, country: string, password: string ) {
        await this.registerFirstName.fill(name);
        await this.registerLastName.fill(name);
        await this.registerEmail.fill(email);
        await this.registerAddress_.fill(address);
        await this.registerCity.fill(city);
        await this.registerRegState.selectOption(state);
        await this.registerZipcode.fill(zipcode);
        await this.registerCountry.selectOption(country);
        await this.registerLoginNam.fill(name);
        await this.registerPassWord.fill(password);
        await this.registerPassWordConf.fill(password);
        await this.registerSubsButton.click();
        await this.registerAgreeTerms.check();
        await this.registerContinBtn.click();
    }
    async navigateAcctUrl() {
        await this.page.goto('https://automationteststore.com/index.php?rt=account/success');
    }
}