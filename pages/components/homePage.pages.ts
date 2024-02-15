import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
    static navigate() {
        throw new Error('Method not implemented.');
    }
    page: Page;
    menNavLink: Locator;
    homeButton: Locator;
    homeNaviLinks: Locator;
    subNewsLetter: Locator;
    subButton: Locator;
    newsLetterHeading: Locator;
    searchKeyBox: Locator;
    magnifyGlass: Locator;
    menKeyWord: Locator;
    currencyButtonUS: Locator;
    currencyButtonEuro: Locator;
    facebookIcon: Locator;
    twitterIcon: Locator;
    linkedinIcon: Locator;
    specialsLinkPage: Locator;
    saleIcon: Locator;
    checkoutLink: Locator;
    shopCartTitlle: Locator;
   
    
    constructor(page: Page) {
        this.page = page;
        this.menNavLink =  page.getByRole('link', {name: 'MEN'});
        this.homeButton = page.getByRole('link', {name: 'HOME'});
        this.homeNaviLinks = page.locator('#categorymenu');
        this.subNewsLetter = page.getByPlaceholder('Subscribe to Newsletter');
        this.subButton = page.getByRole('button', {name: 'Subscribe'});
        this.newsLetterHeading = page.getByText('BECOME A NEWSLETTER SUBSCRIBER');
        this.searchKeyBox =  page.getByPlaceholder('Search Keywords');
        this.magnifyGlass = page.getByTitle('Go').locator('i');
        this.menKeyWord = page.locator('#keyword');
        this.currencyButtonUS = page.locator('a').filter({ hasText: '$ US Dollar' }).first();
        this.currencyButtonEuro = page.locator('#block_frame_featured_1769').getByText('17.83€');
        this.facebookIcon = page.getByRole('banner').getByRole('link', {name: 'Facebook'});
        this.twitterIcon =  page.getByRole('banner').getByRole('link', {name: 'Twitter'});
        this.linkedinIcon = page.getByRole('banner').getByRole('link',{name: 'Linkedin'});
        this.specialsLinkPage = page.getByRole('link', {name: 'SPECIALS'});
        this.saleIcon = page.locator('.sale').first();
        this.checkoutLink = page.getByRole('link',{name: 'CHECKOUT'});
        this.shopCartTitlle = page.getByRole('heading', {name: 'SHOPPING CART'});

    }
    async navigate() {
        await this.page.goto('https://automationteststore.com');
    }
}