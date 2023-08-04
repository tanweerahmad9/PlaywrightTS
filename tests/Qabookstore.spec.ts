import {test, expect } from '@playwright/test'
test ('bookstore', async ({page }) => {
    await page.goto ("https://demoqa.com/books")
    await page.getByRole('link', { name: 'Git Pocket Guide' }).click();
    await page.getByRole('button', { name: 'Back To Book Store' }).click();
    await page.getByPlaceholder('Type to search').click();
    await page.getByPlaceholder('Type to search').fill('you');
    await page.getByRole('link', { name: 'You Don\'t Know JS' }).click();
    await page.getByRole('button', { name: 'Back To Book Store' }).click();
  });