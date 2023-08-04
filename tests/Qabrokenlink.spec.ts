import{test, expect} from '@playwright/test'
test ('brokenlink', async ({ page }) => {
    await page.goto("https://demoqa.com/broken")
    await page.getByText('Broken image').click();
  await page.locator('img').nth(3).click();
  await page.getByRole('link', { name: 'Click Here for Valid Link' }).click();
  await page.getByRole('link', { name: 'Click Here for Broken Link' }).click();
  await page.goto('https://demoqa.com/broken');

});