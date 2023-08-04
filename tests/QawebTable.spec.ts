import {test, expect} from '@playwright/test'
test ('webtable', async ( {page }) => {
    await page.goto ("https://demoqa.com/webtables")
    await page.getByRole('row', { name: 'Cierra Vega 39 cierra@example.com 10000 Insurance Edit Delete' }).getByTitle('Edit').locator('path').click();
    await page.getByPlaceholder('First Name').click();
    await page.getByPlaceholder('First Name').fill('tanweer ');
    await page.getByPlaceholder('Last Name').click();
    await page.getByPlaceholder('Last Name').fill('ahmad');
    await page.getByPlaceholder('name@example.com').click();
    await page.getByPlaceholder('name@example.com').click();
    await page.getByPlaceholder('name@example.com').fill('tanweer@gmail.com');
    await page.getByPlaceholder('Age').click();
    await page.getByPlaceholder('Age').fill('25');
    await page.getByPlaceholder('Salary').click();
    await page.getByPlaceholder('Salary').fill('100000');
    await page.getByPlaceholder('Department').click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByPlaceholder('First Name').click();
    await page.getByPlaceholder('First Name').fill('adil');
    await page.getByPlaceholder('Last Name').click();
    await page.getByPlaceholder('Last Name').fill('ahmad');
    await page.getByPlaceholder('name@example.com').click();
    await page.getByPlaceholder('name@example.com').fill('adil@gmail.com');
    await page.getByPlaceholder('Age').click();
    await page.getByPlaceholder('Age').fill('26');
    await page.getByPlaceholder('Salary').click();
    await page.getByPlaceholder('Salary').fill('500000');
    await page.getByPlaceholder('Department').click();
    await page.getByPlaceholder('Department').fill('IT');
    await page.getByRole('button', { name: 'Submit' }).click();
  });

