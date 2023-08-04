import{test,expect } from '@playwright/test'
test('newtest', async ({ page }) => {
    await page.goto("https://www.flipkart.com/")
    await page.getByRole('button', { name: '✕' }).click();
  await page.getByRole('link', { name: 'Mobiles & Tablets Mobiles & Tablets' }).click();
  await page.getByRole('link', { name: 'd d' }).first().click();
});