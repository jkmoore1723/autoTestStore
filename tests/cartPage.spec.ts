import {expect, test} from '@playwright/test'
import {allure} from 'allure-playwright'
import { CartPage } from '../pages/components/cartPage.pages'


test.describe('Cart Page', () => {
  let cartPage: CartPage
  
  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page)
  })

test('Add An Item To The Cart', async ({ page }) => {
    //{Test: Three Failed Test}
    //Navigate To The HomePage
        await allure.severity('P1')
        await allure.step('Navigate To The HomePage',async () => {
        await cartPage.navigateAcct()
    });

    //Click On The Mens Nav Link
        await allure.severity('P1')
        await allure.step('Click On The Mens Nav Link',async () => {
        await cartPage.mensNavLink.click()
    });

    //Click On Any Item To View ( Test Data: ck IN2U Eau De Toilette Spray for Him )
        await allure.severity('P1')
        await allure.step('Click On Any Item To View',async () => {
        await cartPage.mensSprayItem.click()
    });

    //Click On The Add To Cart Button
        await allure.severity('P1')
        await allure.step('Click On The Add To Cart Button',async () => {
        await cartPage.addToCartBtn.click()
    });

    //(Assertion) - Verify The Checkout Url
        await allure.severity('P1')
        await allure.step('Verify The Checkout Url',async () => {
        await expect(page).toHaveURL('https://automationteststore.com/index.php?rt=checkout/cart');
    });

    //(Assertion) - Verify Item In Cart Is Present
        await allure.severity('P1')
        await allure.step('Verify Item In Cart Is Present',async () => {
        await expect(cartPage.itemInCart).toBeVisible()
    });

  })
test('Adding Multiple Items To Cart', async ({ page }) => {
    //Navigate To The HomePage
        await allure.severity('P1')
        await allure.step('Navigate To The HomePage',async () => {
        await cartPage.navigateAcct()
    });

    //Click On The Books Nav Link
        await allure.severity('P1')
        await allure.step('Click On The Books Nav Link',async () => {
        await cartPage.booksNavLink.click()
    });
    
    //Click On Any Item To View ( Test Data: Allegiant by Veronica Roth Book )
        await allure.severity('P1')
        await allure.step('Click On Any Item To Add To Cart',async () => {
        await cartPage.bookNumOne.click()
    });

    //Add Item To Cart
        await allure.severity('P1')
        await allure.step('Add Item To Cart',async () => {
        await cartPage.addToCartBtn.click()
    });

    //Click On The Fragrance Nav Link
        await allure.severity('P1')
        await allure.step('Click On The Frangrance Nav Link',async () => {
        await cartPage.fragNavLink.click()
    });

    //Click On Another Item To add To Cart ( Test Data: Gucci Fragrance Spray )
        await allure.severity('P1')
        await allure.step('Click On Another Item To Add To Cart',async () => {
        await cartPage.fragGucciSpray.click()
    });

    //Add Item To Cart
        await allure.severity('P1')
        await allure.step('Add Item To Cart',async () => {
        await cartPage.addToCartBtn.click()
    });

    //(Assertion) - Verify Multiple Items Are Added To The Cart
        await allure.severity('P1')
        await allure.step('Verify Multiple Items Are Added To The Cart',async () => {
        await expect(cartPage.itemInCartOne).toBeVisible()
        await expect(cartPage.itemInCartTwo).toBeVisible()
    });

})

test('Delete An Item From The Cart', async ({ page }) => {
    //Navigate To The HomePage
        await allure.severity('P1')
        await allure.step('Navigate To The HomePage',async () => {
        await cartPage.navigateAcct()
    });

    //Click On The Cart Link
        await allure.severity('P1')
        await allure.step('Click On The Cart Link',async () => {
        await cartPage.cartNavLink.click()
    });

    //Delete Item From Cart(Test data: Allegiant by Veronica Roth Book)
        await allure.severity('P1')
        await allure.step('Delete Item From Cart',async () => {
        await cartPage.trashBtn.click()
    });

    //(Assertion) - Verify The Item Is Not Visible In The Cart
        await allure.severity('P1')
        await allure.step('Verify The Item Is Not Visible In The Cart',async () => {
        await expect(cartPage.itemInCartOne).not.toBeVisible()
    });

     //(Assertion) - Verify One Item Is In The Cart(Test data: Gucci Spray)
        await allure.severity('P1')
        await allure.step('Verify One Item Is In The Cart',async () => {
        await expect(cartPage.itemInCartTwo).toBeVisible()
    });

})
    
test('Update Quantity Of A Item', async ({ page }) => {
    //Navigate To The HomePage
        await allure.severity('P1')
        await allure.step('Navigate To The HomePage',async () => {
        await cartPage.navigateAcct()
    });

     //Click On The Cart Link
        await allure.severity('P1')
        await allure.step('Click On The Cart Link',async () => {
        await cartPage.cartNavLink.click()
    });

    //Change Quantity Of Item In Cart( Test Data: 2 )
        await allure.severity('P1')
        await allure.step('Change Quantity Of Item In Cart',async () => {
        await cartPage.updateQuanity.fill('2')
    });

    //Click On The Update Button
        await allure.severity('P1')
        await allure.step('Click On The Update Button',async () => {
        await cartPage.updateQuanBtn.click()
    });

    //(Assertion) - Verify The Quantity Is Updated
        await allure.severity('P1') 
        await allure.step('Verify The Quantity Is Updated',async () => {
        await expect(cartPage.updateQuanity).toHaveValue('2')
    });

})
 
test('Outdated Coupon Error', async ({ page }) => {
    //Navigate To The HomePage
        await allure.severity('P1')
        await allure.step('Navigate To The HomePage',async () => {
        await cartPage.navigateAcct()
    });

    //Click On The Cart Link
        await allure.severity('P1')
        await allure.step('Click On The Cart Link',async () => {
        await cartPage.cartNavLink.click()
    });

    //Fill In Coupon Code In Placeholder
        await allure.severity('P1')
        await allure.step('Fill In Coupon Code In Placeholder',async () => {
        await cartPage.couponCode.fill('newyear2024!')
    });

    //Click On Apply Coupon Button
        await allure.severity('P1')
        await allure.step('Click On Apply Coupon Button',async () => {
        await cartPage.applyCouponBtn.click()
    });

    //(Assertion) - Verify The Error Coupon Alert Message
        await allure.severity('P1')
        await allure.step('Verify The Error Coupon Alert Message',async () => {
        await expect(cartPage.couponErrorAlert).toBeVisible()
    });
    
})

test('Standard Flow Checkout', async ({ page }) => {
    //Navigate To The HomePage
        await allure.severity('P1')
        await allure.step('Navigate To The HomePage',async () => {
        await cartPage.navigateAcct()
    });

    //Click On The SkinCare Nav Link
        await allure.severity('P1')
        await allure.step('Click On The SkinCare Nav Link',async () => {
        await cartPage.skincareNavLink.click()
    });

    //Click On Any Skincare Item And Add To Cart ( Test Data: Absolue Eye Precious Cells )
        await allure.severity('P1')
        await allure.step('Click On Any Skincare And Add To Cart',async () => {
        await cartPage.skincareItem.click()
    });

    //Add Item To The Cart
        await allure.severity('P1')
        await allure.step('Add Item To The Cart',async () => {
        await cartPage.addToCartBtn.click()
    });

    //Click On The Checkout Button
        await allure.severity('P1')
        await allure.step('Click On The Checkout Button',async () => {
        await cartPage.checkOutBtn.click()
    });

    //Click On The Confirm Order Button
        await allure.severity('P1')
        await allure.step('Click On The Confirm Order Button',async () => {
        await cartPage.confirmOrderButton.click()
    });

    //(Assertion) - Verify The Successful Order Message
        await allure.severity('P1')
        await allure.step('Verify The Successful Order Message',async () => {
        await expect(cartPage.successfulOrderMessage).toBeVisible()
    });
    
    })

})

test.describe('Checkout Guest User', () => {
    test.use({ storageState: { cookies: [], origins: [] } });
    let cartPage: CartPage
  
  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page)
})
test('Checkout As A Guest User', async ({ page }) => {
    //{Test: Guest User Information Is Not Filled Out}
    //Navigate To The HomePage
        await allure.severity('P1')
        await allure.step('Navigate To The HomePage',async () => {
        await cartPage.navigateAcct()
    });

    //Click On The Mens Nav Link
        await allure.severity('P1')
        await allure.step('Click On The Mens Nav Link',async () => {
        await cartPage.mensNavLink.click()
    });

    //Click On Any Item To View ( Test Data: ck IN2U Eau De Toilette Spray for Him )
        await allure.severity('P1')
        await allure.step('Click On Any Item To View',async () => {
        await cartPage.mensSprayItem.click()
    });

    //Click On The Add To Cart Button
        await allure.severity('P1')
        await allure.step('Click On The Add To Cart Button',async () => {
        await cartPage.addToCartBtn.click()
    });

    //Click On The Checkout Button
        await allure.severity('P1')
        await allure.step('Click On The Checkout Button',async () => {
        await cartPage.checkOutBtn.click()
    });

    //Click On The Guest Checkout Button
        await allure.severity('P1')
        await allure.step('Click On The Guest Checkout Button',async () => {
        await cartPage.guestCheckOutBtn.click()
    });

    //Click On The Continue Button
        await allure.severity('P1')
        await allure.step('Click On The Continue Button',async () => {
        await cartPage.continueBtn.click()
    });

    //Fill Out The Guest User Information
        await allure.severity('P1')
        await allure.step('Fill Out The Guest User Information',async () => {
        await cartPage.guestCheckoutInfo()
    });

    //Click On The Continue Button
        await allure.severity('P1')
        await allure.step('Click On The Continue Button',async () => {
        await cartPage.continueBtn.click()
    });

    //Click On The Confirm Order Button
        await allure.severity('P1')
        await allure.step('Click On The Confirm Order Button',async () => {
        await cartPage.confirmOrderButton.click()
    });

    //(Assertion) - Verify The Successful Order Message
        await allure.severity('P1')
        await allure.step('Verify The Successful Order Message',async () => {
        await expect(cartPage.successfulOrderMessage).toBeVisible()
    });
    
 })
    
})
