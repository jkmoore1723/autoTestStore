import {Page, expect, Locator,} from '@playwright/test'

export class CartPage {
    page: Page;
    loginOrRegistLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginOrRegistLink = page.getByRole('link', {name: 'Login or register'});


    }
    async navigateAcct() {
        await this.page.goto('https://automationteststore.com');
    }
}