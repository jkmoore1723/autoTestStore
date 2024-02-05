import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationteststore.com/');
  await page.getByRole('link', { name: 'Login or register' }).click();
});