import {expect, Locator, Page } from '@playwright/test';

export class ContactPage {
    page: Page;
    addressStoreName: Locator;
    storePhoneNumber: Locator;
    firstName: Locator;
    eMail: Locator;
    enqMessage: Locator;
    submitButton: Locator;
    successfullMessage: any;
    contactUSHead: any;

    constructor(page: Page) {
        this.page = page;
        this.addressStoreName = page.getByText('Address: Automation Test');
        this.storePhoneNumber = page.getByText('Telephone: 012345');
        this.firstName = page.locator('//*[@id="ContactUsFrm_first_name"]');
        this.eMail = page.locator('//*[@id="ContactUsFrm_email"]');
        this.enqMessage = page.locator('textarea[name="enquiry"]');
        this.submitButton = page.getByRole('button', { name: ' Submit' });
        this.successfullMessage = page.getByText('Your Enquiry has been successfully sent to the store owner!');
        this.contactUSHead = page.getByRole('heading', { name: ' Contact Us' });
       

    }
    async navigateCont() {
       await this.page.goto('https://automationteststore.com/index.php?rt=content/contact');
    }
    async signUpForm() {
        await this.firstName.fill('James StPatrick');
        await this.eMail.fill('james.stpatrick1723@icloud.com');
        await this.enqMessage.fill('This Is A Test Message To Contact The Company Page');
    }
}