import {test, expect} from '@playwright/test'
test('links', async ({ page }) => {
    await page.goto("https://demoqa.com/links")
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Home', exact: true }).click();
    const page1 = await page1Promise;
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'HomeJ8ahc' }).click();
    const page2 = await page2Promise;
    await page.getByRole('link', { name: 'Created' }).click();
    await page.getByRole('link', { name: 'Created' }).click();
    await page.getByRole('link', { name: 'No Content' }).click();
    await page.getByRole('link', { name: 'Moved' }).click();
    await page.getByRole('link', { name: 'Bad Request' }).click();
    await page.getByRole('link', { name: 'Unauthorized' }).click();
    await page.getByRole('link', { name: 'Forbidden' }).click();
    await page.getByRole('link', { name: 'Not Found' }).click();
});