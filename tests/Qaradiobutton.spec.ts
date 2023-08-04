import { test, expect } from '@playwright/test'
test ('radiobutton', async ({page }) => {
    await page.goto("https://demoqa.com/radio-button")
    await page.getByText('Yes').click();
    await page.getByText('Impressive').click();
    await page.getByText('Yes').click();


} );