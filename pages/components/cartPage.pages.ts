import {Page, expect, Locator,} from '@playwright/test'
import { link } from 'fs';

export class CartPage {
    page: Page;
    loginOrRegistLink: Locator;
    mensNavLink: Locator;
    mensSprayItem: Locator;
    addToCartBtn: Locator;
    itemInCart: Locator;
    booksNavLink: Locator;
    bookNumOne: Locator;
    fragNavLink: Locator;
    fragGucciSpray: Locator;
    itemInCartOne: Locator;
    itemInCartTwo: Locator;
    cartNavLink: Locator;
    trashBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginOrRegistLink = page.getByRole('link', {name: 'Login or register'});
        this.mensNavLink = page.getByRole('link', {name: 'Men', exact: true});
        this.mensSprayItem = page.getByRole('link', {name: 'ck IN2U Eau De Toilette Spray'});
        this.addToCartBtn = page.getByRole('link', {name: '  Add to Cart '});
        this.itemInCart = page.getByRole('cell', { name: 'ck IN2U Eau De Toilette Spray' });
        this.booksNavLink = page.getByRole('link', {name: 'Books', exact: true});
        this.bookNumOne = page.getByRole('link', {name:'Allegiant by Veronica Roth', exact: true});
        this.fragNavLink = page.getByRole('link', {name:'Fragrance', exact: true});
        this.fragGucciSpray = page.getByRole('link', {name: 'Gucci Guilty', exact: true});
        this.itemInCartOne = page.getByRole('cell', {name:'Allegiant by Veronica Roth'});
        this.itemInCartTwo = page.getByRole('cell', {name: 'Gucci Guilty'});
        this.cartNavLink = page.getByRole('link', { name: ' Cart' });
        this.trashBtn = page.getByRole('link', { name: '' }).first();


    }
    async navigateAcct() {
        await this.page.goto('https://automationteststore.com');
    }
}