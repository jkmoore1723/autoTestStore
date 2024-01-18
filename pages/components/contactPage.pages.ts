import {expect, Locator, Page } from '@playwright/test';

export class ContactPage {
    page: Page;
    addressStoreName: any;
    storePhoneNumber: any;
    firstName: any;
    eMail: any;
    enqMessage: any;
    submitButton: any;
    successfullMessage: any;
    contactUSHead: any;

    constructor(page: Page) {
        this.page = page;
        this.addressStoreName = page.getByText('Address: Automation Test');
        this.storePhoneNumber = page.getByText('Telephone: 012345');
        this.firstName = page.getByLabel('First name:', {exact: true});
        this.eMail = page.getByLabel('Email:', {exact: true});
        this.enqMessage = page.getByLabel('Enquiry:', {exact: true});
        this.submitButton = page.getByRole('button', { name: ' Submit' });
        this.successfullMessage = page.getByText('Your Enquiry has been successfully sent to the store owner!');
        this.contactUSHead = page.getByRole('heading', { name: ' Contact Us' });
       

    }
    async navigateCont() {
       await this.page.goto('https://automationteststore.com/index.php?rt=content/contact');
    }
    async signUpForm() {
        await this.firstName.fill('James St.Patrick');
        await this.eMail.fill('james.stpatrick1723@icloud.com');
        await this.enqMessage.fill('This Is A Test Message To Contact The Company Page');
    }
}