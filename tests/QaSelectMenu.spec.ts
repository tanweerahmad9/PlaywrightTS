import {test , expect } from '@playwright/test'
test ('SelectMenu', async ({page }) => {
    await page.goto("https://demoqa.com/select-menu")
    await page.locator('#withOptGroup div').filter({ hasText: 'Select Option' }).nth(1).click();
  await page.getByText('Group 1, option 2', { exact: true }).click();
  await page.getByText('Select Title').click();
  await page.getByText('Mr.', { exact: true }).click();
  await page.locator('#oldSelectMenu').selectOption('6');
  await page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(2).click();
  await page.locator('#react-select-4-option-0').click();
  await page.locator('#react-select-4-option-2').click();
  await page.locator('#react-select-4-input').press('ArrowDown');
  await page.locator('#cars').selectOption('audi');
});