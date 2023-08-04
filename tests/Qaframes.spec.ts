import {test, expect } from '@playwright/test'
test ('frames', async ({page}) => {
    await page.goto("https://demoqa.com/frames")
    await page.frameLocator('#frame1').locator('html').click();
});
