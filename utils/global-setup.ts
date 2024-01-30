import { chromium, FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
    
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
     //Save As notLoggedInState
    await page.goto('https://automationteststore.com/index.php?rt=account/login');
    await page.context().storageState({ path: 'notLoggedInState.json' });

    await page.locator('#loginFrm_loginname').fill('jamesjones1723');
    await page.locator('#loginFrm_password').fill('Moore1723!');
    await page.getByRole('button', { name: ' Login' }).click();

    //Save As LoggedInState
    await page.context().storageState({ path: 'LoggedInState.json' });
    await browser.close();
  }

  export default globalSetup;