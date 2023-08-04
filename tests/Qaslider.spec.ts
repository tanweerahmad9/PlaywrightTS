import { test } from "@playwright/test";
test('slider', async ({ page })=> {
    await page.goto("https://demoqa.com/slider")
    await page.getByRole('slider').click();
});