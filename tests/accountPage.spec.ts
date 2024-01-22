import {expect, test} from '@playwright/test';
import {allure} from 'allure-playwright';
import { AccountPage } from '../pages/components/accountPage.pages';

test.describe('Account', () => {
    let accountPage: AccountPage
    test.beforeEach(async ({ page }) => {
        accountPage = new AccountPage(page);
    })
    
    test('Click On Register Or Login Link & Verify The Url', async ({ page }) => {
        //Navigate To The Url Site
            await allure.severity('P1');
            await allure.step('Navigate To The Url HomePage Site',async () => {
            await accountPage.navigateMain();
        })

        //Click On The Login Or Register Link
            await allure.step('Click On The Login Or Register Link',async () => {
            await accountPage.loginOrRegistLink.click();
        })

        //(Assertion) - Verify The Url For The Site
            await allure.step('Verify The Url',async () => {
            await expect(page).toHaveURL('https://automationteststore.com/index.php?rt=account/login');
        })

    });

    test('Click On The Login Link & Verify Url (Footer)', async ({ page }) => {
        //Navigate To The Url Site
            await allure.severity('P1');
            await allure.step('Navigate To The HomePage Url Site',async () => {
            await accountPage.navigateMain();
        })

        //Click On The Login Link (Footer)
            await allure.step('Click On The Login Link (Footer)',async () => {
            await accountPage.loginLinkFootr.click();
        })

        //(Assertion) - Verify The Login Url
            await allure.step('Verify The Login Url For The Site',async () => {
            await expect(page).toHaveURL('https://automationteststore.com/index.php?rt=account/login');
        })

        //(Assertion) - Verify The Account Login Text Heading
            await allure.step('Verify The Account Login Heading Text',async () => {
            await expect(accountPage.accountLoginHead).toBeVisible();
        })

    });
    
    test('Register For A Account', async ({ page }) => {
        //*(Finish Assertion error message)
        //Navigate To The Account Url Site
            await allure.severity('P1');
            await allure.step('Navigate To The Url Account Site',async () => {
            await accountPage.navigateAcct();
        })

        //Verify The Register Account Button Is Clicked
            await allure.step('Verify Register Account Is Enabled',async () => {
            await accountPage.registerAccountButton.isChecked();
        })

        //Click On The Continue Button
            await allure.step('Click On The Continue Button',async () => {
            await accountPage.continueRegButton.click();
        })

        //Fill Out Register Account Form
            await allure.step('Fill Out Register Form',async () => {
            await accountPage.registerForm();   
        })

        //(Assertion)- Verify The Account Created Heading Text
            await allure.step('Verify The Account Created Heading Text',async () => {
            await expect(accountPage.accountCreatedHead).toHaveText('Your Account Has Been Created!');
        });
            
        
    });

    test('Click The Forgot Password Link & Verify The Url', async ({ page }) => {
        //Navigate To The Url Site
            await allure.severity('P1');
            await allure.step('Navigate To The Account Url Site',async () => {
            await accountPage.navigateAcct();
        })

        //Click On The Forgot Your Password Link
            await allure.step('Click On The Forgot Your Password Link',async () => {
            await accountPage.forgotPasswordLink.click();
        })

        //(Assertion) - Verify The Url For Forgotten Password 
            await allure.step('Verify The Url Forgotten Password',async () => {
            await expect(page).toHaveURL('https://automationteststore.com/index.php?rt=account/forgotten/password');
        })

        //(Assertion) - Verify The Forgot Your Password Heading Text
            await allure.step('Verify The Forgot Your Pasword Heading Text',async () => {
            await expect(accountPage.forgotPasswordHeadTxt).toBeVisible();
        })

    });

    test('Submit Forgot Password Request', async ({ page }) => {
        //(*Tentative Test Case*) - Have to create account to make a forgot password request
        //Navigate To The Url Site
            await allure.severity('P1');
            await allure.step('Navigate To The Account Url Site',async () => {
            await accountPage.navigateAcct();
        })

         //Click On The Forgot Your Password Link
            await allure.step('Click On The Forgot Your Password Link',async () => {
            await accountPage.forgotPasswordLink.click();
        })
        
        //Fill Out Password Reset Request
            await allure.step('Fill Out The Password Reset Request',async () => {
            await accountPage.passwordReset();
        })

        //(Assertion)

    });

    test('Click On Forgot Your Login & Verify The Url', async ({ page }) => {
        //Navigate To The Url Site
            await allure.severity('P1');
            await allure.step('Navigate To The Account Url Site',async () => {
            await accountPage.navigateAcct();
        })

         //Click On The Forgot Your Login Link
            await allure.step('Click On The Forgot Your Login Link',async () => {
            await accountPage.forgotLoginLink.click();
         })

         //(Assertion) - Verify The Forgot Login Url
            await allure.step('Verify The Forgot Login Url',async () => {
            await expect(page).toHaveURL('https://automationteststore.com/index.php?rt=account/forgotten/loginname');
        })

        //(Assertion) - Verify The Forgot Your Login Name Heading Text
            await allure.step('Verify The Forgot Your Login Name heading',async () => {
            await expect(accountPage.forgotLoginNameHeadTxt).toBeVisible();
        })

    });

    test('Submit Forgot Login Request', async ({ page }) => {
        //(*Tenative Test Case*)- Have to create account to make a forgot login request
        //Navigate To The Url Site
            await allure.severity('P1');
            await allure.step('Navigate To The Account Url Site',async () => {
            await accountPage.navigateAcct();
        })

        //Click On The Forgot Your Login Link
            await allure.step('Click On The Forgot Your Login Link',async () => {
            await accountPage.forgotLoginLink.click();
        })

        //Fill Out The Forgot Login Request
            await allure.step('Filling Out The Login Request',async () => {
            await accountPage.loginReset();
        })

        //(Assertion)

    });
    
});
