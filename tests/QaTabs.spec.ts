import{test, expect } from '@playwright/test'
test ('Tabs', async ({ page}) => {
    await page.goto ("https://demoqa.com/tabs")
    await page.getByRole('tab', { name: 'What' }).click();
  await page.getByRole('tab', { name: 'Origin' }).click();
  await page.getByRole('tab', { name: 'Use' }).click();
});