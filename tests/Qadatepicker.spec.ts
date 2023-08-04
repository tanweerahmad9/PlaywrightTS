import { test } from "@playwright/test";
test('datepicker', async ({ page }) => {
    await page.goto("https://demoqa.com/date-picker")
    await page.locator('#datePickerMonthYearInput').click();
    await page.getByLabel('Choose Tuesday, August 15th, 2023').click();
    await page.locator('#dateAndTimePickerInput').click();
    await page.getByLabel('Choose Wednesday, August 16th, 2023').click();
    await page.getByText('17:15').click();
  });