import {expect, test} from '@playwright/test'
import {allure} from 'allure-playwright'
import { CartPage } from '../pages/components/cartPage.pages'
import { beforeEach } from 'node:test'

test.describe('Cart Page', () => {
  let cartPage: CartPage
  
  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page)
  })

test('Add An Item To The Cart', async ({ page }) => {
    //Navigate To The HomePage
    //(* add helper method into pages)
        await allure.step('Navigate To The HomePage',async () => {
        await cartPage.navigateAcct();
    })

    //


  })
  
  
})
