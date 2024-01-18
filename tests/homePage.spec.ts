import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/components/homePage.pages';
import {allure} from 'allure-playwright';

test.describe('HomePage', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
    })

    test('Navigate To HomePage', async ({ page }) => {
        //Navigate To The HomePage
            await allure.severity('P1')
            await allure.step('Navigate To The Url', async () => {
            await homePage.navigate(); 
        });

        //(Assertion) - Confirm The URL
            await allure.step('Verify The Url Is Present', async () => {
            await expect(page).toHaveURL('https://automationteststore.com'); 
            });
    })

    test('Click On HomePage Button To Return To HomePage', async ({ page }) => {
        //Go To The HomePage
            await allure.severity('P1')
            await allure.step('Navigate To The Url', async () => {
            await homePage.navigate();
        });
            
        //Click On Any Nav Links To Go To Another Page ( On The HomePage)(Test: Using "MEN" link for test)
            await allure.step('Click On The MEN Nav Link',async () => {
            await homePage.menNavLink.click();
        });
        
        //Click On The Home Button 
            await allure.step('Click On The Home Button',async () => {
            await homePage.homeButton.click();
        });

        //(Assertion) - Verify The URL HomePage
            await allure.step('Verify The Url Is Present',async () => {
            await expect(page).toHaveURL('https://automationteststore.com');  
        });   
    })

    test('Verifying The Nav Links', async ({ page }) => {
         //Go To The HomePage
            await allure.severity('P1')
            await allure.step('Navigate To The Url',async () => {
            await homePage.navigate(); 
            });
           
         //(Assertion) - Verifying The Nav Links List
         await allure.step('Verify All The Navigation Links',async () => {
         await homePage.homeNaviLinks.allTextContents();
         });   
    })

    test('Subscribe To News Letter', async ({ page }) => {
        //Go To The HomePage
            await allure.severity('P1')
            await allure.step('Navigate To The Url',async () => {
            await homePage.navigate();
        });
            
         //Subcribe To Newsletter By Entering Email & Click Submit Button
            await allure.step('Enter Email Address To Subscribe',async () => {
            await homePage.subNewsLetter.fill('james.stpatrick1723@icloud.com');  
            });
           
            await allure.step('Click On The Subscribe Button',async () => {
            await homePage.subButton.click();  
            });
            
        //(Assertion) - Verify The Newsletter Heading
            await allure.step('Verify The News Letter Heading',async () => {
            await expect(homePage.newsLetterHeading).toBeVisible();
        });
    })

    test('Search For An Item', async ({ page }) => {
        //Go To The HomePage
            await allure.severity('P1')
            await allure.step('Navigate To The Url',async () => {
            await homePage.navigate();  
            });
            
        //Click On The Search Keywords & ( Search Anything In The Search Keywords)
            await allure.step('Click On The Search Keyword Box',async () => {
            await homePage.searchKeyBox.fill('Skincare');
        });
            
        //Click On The Maginifying Glass
            await allure.step('Click On The Magnifying Glass',async () => {
            await homePage.magnifyGlass.click();
        });
            
        //(Assertion) - Verify That You On Men Page
            await allure.step('Verify The Men Keyword',async () => {
            await expect(homePage.menKeyWord).toHaveText('MEN');  
            }); 
    })

    test('Change Currency', async ({ page }) => {
        //Go To The HomePage
            await allure.severity('P1')
            await allure.step('Navigate To The Url',async () => {
            await homePage.navigate(); 
            });
          
        //Click On The Currency Button & Change To Another Currency(Test: Euro)
            await allure.step('Click On The Currency Button',async () => {
            await homePage.currencyButtonUS.selectOption('EURO');  
            });
            
        //(Assertion) - Verify The Currency Change
        await allure.step('Verify The Euro Currency',async () => {
        await expect(homePage.currencyButtonEuro).toBeVisible(); 
        });      
    })

    test('Social Media Link For Facebook', async ({ page }) => {
         //Go To The HomePage
            await allure.severity('P1')
            await allure.step('Navigate To The Url',async () => {
            await homePage.navigate(); 
         });
            
         //Click On FaceBook Icon
            await allure.step('Click On The Facebook Icon',async () => {
            await homePage.facebookIcon.click();
         })
            

         //(Assertion) - Verify The Facebook URL
            await allure.step('Verify The Facebook Page',async () => {
            await expect(page).toHaveURL('https://www.facebook.com'); 
         });    
    })

    test('Social Media Link For Twitter', async ({ page }) => {
        //Go To The HomePage
            await allure.severity('P1')
            await allure.step('Navigate To The Url',async () => {
            await homePage.navigate();
        });
            
        //Click On The Twitter Icon
            await allure.step('Click On The Twitter Icon',async () => {
            await homePage.twitterIcon.click(); 
        })
            

        //(Assertion) - Verify The Twitter URL
            await allure.step('Verify The Twitter URL',async () => {
            await expect(page).toHaveURL('https://twitter.com'); 
        });
            

    })
    test('Social Media Link For LinkedIn', async ({ page }) => {
        //Go To The HomePage
            await allure.severity('P1')
            await allure.step('Navigate To The Url',async () => {
            await homePage.navigate();
        });
            
        //Click On LinkedIn Icon
            await allure.step('Click On The Linkedin Button',async () => {
            await homePage.linkedinIcon.click();
        });
            
        //(Assertion) - Verify The LinkedIn URL
            await allure.step('Verify The Url Link',async () => {
            await expect(page).toHaveURL('https://uk.linkedin.com');
        });
    })

    test('Specials Page', async ({ page }) => {
        //Go To The HomePage
            await allure.severity('P1')
            await allure.step('Navigate To The Url',async () => {
            await homePage.navigate(); 
            });
            
        //Click On The Specials Nav Link
            await allure.step('Click On The Specials Nav Link',async () => {
            await homePage.specialsLinkPage.click();
        });
        
        //(Assertion) - Verify The URL
            await allure.step('Verify The Url',async () => {
            await expect(page).toHaveURL('https://automationteststore.com/index.php?rt=product/special');  
        });
        
        //(Assertion) - Verify The Sale Icon
            await allure.step('Verify The Sale Icon',async () => {
            await expect(homePage.saleIcon).toBeVisible();   
        });
    })

    test('Go To Checkout page', async ({ page }) => {
        //Go To The HomePage
            await allure.severity('P1')
            await allure.step('Navigate To The Url',async () => {
            await homePage.navigate();
        });

        //Click On The Checkout Link
            await allure.step('Click On The Checkout Link',async () => {
            await homePage.checkoutLink.click();
        });
        
        //(Assertion) - Verify The URL
            await allure.step('Verify The Url',async () => {
            await expect(page).toHaveURL('https://automationteststore.com/index.php?rt=checkout/cart');   
        });
            
        //(Assertion) - Verify The Shopping Cart Title
        await allure.step('Verify The Cart Title',async () => {
            await expect(homePage.shopCartTitlle).toBeVisible(); 
        });  

    })
    
})
