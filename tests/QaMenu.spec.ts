import{test, expect } from '@playwright/test'
test ('Menu', async ({ page }) => {
    await page.goto("https://demoqa.com/menu#")
    await page.getByRole('link', { name: 'Main Item 1' }).click();
  await page.getByRole('link', { name: 'Main Item 2' }).click();
  await page.getByRole('link', { name: 'Sub Item' }).first().click();
  await page.getByRole('link', { name: 'Sub Item' }).nth(1).click();
  await page.getByRole('link', { name: 'SUB SUB LIST »' }).click();
  await page.getByRole('link', { name: 'Sub Sub Item 1' }).click();
  await page.getByRole('link', { name: 'Sub Sub Item 2' }).click();
  await page.getByRole('link', { name: 'Main Item 3' }).click();
});