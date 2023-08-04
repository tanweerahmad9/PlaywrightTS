import{test, expect } from '@playwright/test'
test('Sortable', async ({page }) => {
    await page.goto("https://demoqa.com/sortable")
    await page.getByLabel('List').getByText('One').click();
    await page.getByLabel('List').getByText('Three').click();
    await page.getByLabel('List').getByText('Four').click();
    await page.getByRole('tab', { name: 'Grid' }).click();
    await page.getByLabel('Grid').getByText('One').click();
    await page.getByLabel('Grid').getByText('Two').click();
    await page.getByLabel('Grid').getByText('Three').click();
    await page.getByRole('tab', { name: 'List' }).click();
  });