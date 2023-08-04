import {test , expect} from '@playwright/test'
test('nestedframes', async ({ page}) => {
    await page.goto("https://demoqa.com/nestedframes")
    await page.frameLocator('#frame1').frameLocator('iframe').locator('html').click();
  await page.frameLocator('#frame1').getByText('Parent frame').click();
  await page.frameLocator('#frame1').frameLocator('iframe').locator('html').click();
});