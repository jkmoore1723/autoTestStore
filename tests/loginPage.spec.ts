import {test , expect} from '@playwright/test'
import {allure} from 'allure-playwright'

test.describe('Account Login Page', () => {
    test.use({ storageState: 'notLoggedInState.json'})
    test('Verify The Login Button For Account Page ', async ({ page }) => {
        //Go To The Account Url Site
            await allure.step('Navigate To The Account Url Site',async () => {
            await page.goto('https://automationteststore.com/index.php?rt=account/login');
        });

        //(Assertion) - Verify The Login Button
            await allure.step('Verify The Login Button',async () => {
            await expect(page.getByRole('button', { name: ' Login' })).toBeEnabled();
        });
        
    });

})

test.describe('My Account Page', () => {
    test('Navigate To Account Page', async ({ page }) => {
        //Navigate To Account Page
            await allure.step('Navigate To Account Page',async () => {
            await page.goto('https://automationteststore.com/index.php?rt=account/login');
        });

        //Click On The Order History Link
            await allure.step('Click On The Order history Link',async () => {
            await page.getByRole('link', {name: ' Order history'}).click();
        });

        //(Assertion) - Verify The Account Url
            await allure.step('Verify The Account Url',async () => {
            await expect(page).toHaveURL('https://automationteststore.com/index.php?rt=account/history')   ;
        });
    
    });
    
})

