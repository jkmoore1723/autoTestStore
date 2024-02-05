import {Page, expect, Locator,} from '@playwright/test'

export class CartPage {
    page: Page;
    loginOrRegistLink: Locator;
    mensNavLink: Locator;
    mensSprayItem: Locator;
    addToCartBtn: Locator;
    itemInCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginOrRegistLink = page.getByRole('link', {name: 'Login or register'});
        this.mensNavLink = page.getByRole('link', {name: 'Men', exact: true});
        this.mensSprayItem = page.getByRole('link', {name: 'ck IN2U Eau De Toilette Spray'});
        this.addToCartBtn = page.getByRole('link', {name: '  Add to Cart '});
        this.itemInCart = page.getByRole('cell', { name: 'ck IN2U Eau De Toilette Spray' });


    }
    async navigateAcct() {
        await this.page.goto('https://automationteststore.com');
    }
}