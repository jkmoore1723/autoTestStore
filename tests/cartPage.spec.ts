import {expect, test} from '@playwright/test'
import {allure} from 'allure-playwright'
import { CartPage } from '../pages/components/cartPage.pages'


test.describe('Cart Page', () => {
  let cartPage: CartPage
  
  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page)
  })

test('Add An Item To The Cart', async ({ page }) => {
    //Navigate To The HomePage
        await allure.step('Navigate To The HomePage',async () => {
        await cartPage.navigateAcct();
    });

    //Click On The Mens Nav Link
        await allure.step('Click On The Mens Nav Link',async () => {
        await cartPage.mensNavLink.click();
    });

    //Click On Any Item To View (Test Dat: ck IN2U Eau De Toilette Spray for Him)
        await allure.step('Click On Any Item To View',async () => {
        await cartPage.mensSprayItem.click();
    });

    //Click On The Add To Cart Button
        await allure.step('Click On The Add To Cart Button',async () => {
        await cartPage.addToCartBtn.click();
    });

    //(Assertion) - Verify The Checkout Url
        await allure.step('Verify The Checkout Url',async () => {
        await expect(page).toHaveURL('https://automationteststore.com/index.php?rt=checkout/cart');
    });

    //(Assertion) - Verify Item In Cart Is Present
        await allure.step('Verify Item In Cart Is Present',async () => {
        await expect(cartPage.itemInCart).toBeVisible();
    });

  })
  
  
})
