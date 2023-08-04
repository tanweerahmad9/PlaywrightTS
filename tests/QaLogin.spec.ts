import {test, expect } from '@playwright/test'
test ('Login', async ({page}) => {
    await page.goto ("https://demoqa.com/login")
    await page.getByPlaceholder('UserName').click();
  await page.getByPlaceholder('UserName').fill('tanweer09@gmail.com');
  await page.getByPlaceholder('UserName').press('Tab');
  await page.getByPlaceholder('Password').fill('pass123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'New User' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('tanweer');
  await page.getByPlaceholder('First Name').press('Tab');
  await page.getByPlaceholder('Last Name').fill('ahmad');
  await page.getByPlaceholder('Last Name').press('Tab');
  await page.getByPlaceholder('UserName').fill('tanweer09');
  await page.getByPlaceholder('UserName').press('Tab');
  await page.getByPlaceholder('Password').fill('pass123');
  await page.frameLocator('iframe[name="a-tgsx89jbiy1y"]').getByLabel('I\'m not a robot').click();
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('button', { name: 'Back to Login' }).click();
  await page.getByPlaceholder('UserName').click();

});