import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto("https://github.com/")
  await page.getByRole('button', { name: 'Product' }).click();
  await page.getByRole('link', { name: 'Actions Automate any workflow' }).click();
  await page.getByRole('link', { name: 'Packages' }).click();
  await page.getByRole('main').getByRole('link', { name: 'Security' }).click();
});
