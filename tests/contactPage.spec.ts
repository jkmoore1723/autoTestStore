import {test, expect} from '@playwright/test';
import {allure} from 'allure-playwright';
import { ContactPage } from '../pages/components/contactPage.pages';
import { beforeEach } from 'node:test';

test.describe('Contact Us Page', () => {
    
    let contactPage: ContactPage;
    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);
    })
     test('Navigate To The Contact Us Page', async ({ page }) => {
        //Navigate To The Url Site
            await allure.severity('P1')
            await allure.step('Navigate To The Url',async () => {
            await contactPage.navigateCont();
        })

        //(Assertion) - Verify The Url 
            await allure.step('Verify The Url',async () => {
            await expect(page).toHaveURL('https://automationteststore.com/index.php?rt=content/contact');
            })

        //(Assertion) - Verify Address Information & Phone Number Is Present
            await allure.step('Verify The Address Information & Phone Number',async () => {
            await expect(contactPage.addressStoreName).toBeVisible();
            await expect(contactPage.storePhoneNumber).toBeVisible();
            })

        });

    test('Fill Out Contact Form', async ({ page }) => {
        //Fill Out The Contact Form
            await allure.severity('P1')
            await allure.step('Fill Out Contact Form',async () => {
            await contactPage.signUpForm();
        })

        //Click On The Submit Button
            await allure.step('Click On The Submit Button',async () => {
            await contactPage.submitButton.click();
            })

        //(Assertion) - Verify The Contact US Heading
            await allure.step('Verify The Contact Us Heading',async () => {
            await contactPage.contactUSHead.toBeVisible()
            })

        //(Assertion) - Verify The Successful Message Being Sent
            await allure.step('Verify The Successful Message Sent',async () => {
            await expect(contactPage.successfullMessage()).toBeVisible();
            })

        });  
});
