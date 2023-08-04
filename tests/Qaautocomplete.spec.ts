import { test } from "@playwright/test";

test('autocomplete', async ({ page }) => {
    await page.goto("https://demoqa.com/auto-complete")
    await page.locator('.auto-complete__value-container').first().click();
    await page.locator('#autoCompleteMultipleInput').fill('r');
    await page.locator('#autoCompleteMultipleInput').press('Enter');
    await page.locator('#autoCompleteMultipleInput').fill('b');
    await page.locator('#autoCompleteMultipleInput').press('Enter');
    await page.locator('#autoCompleteMultipleInput').fill('g');
    await page.locator('#autoCompleteMultipleInput').press('Enter');
    await page.locator('#autoCompleteMultipleInput').fill('p');
    await page.locator('#autoCompleteMultipleInput').press('Enter');
    await page.locator('#autoCompleteSingleContainer > .auto-complete__control > .auto-complete__value-container').click();
    await page.locator('#autoCompleteSingleInput').fill('bla');
    await page.locator('#autoCompleteSingleInput').press('Enter');
    await page.locator('#autoCompleteSingleInput').click();
  });