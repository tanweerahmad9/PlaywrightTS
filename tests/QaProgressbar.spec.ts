import { test } from "@playwright/test";
test ('Progressbar', async ({page}) => {
    await page.goto("https://demoqa.com/progress-bar")
    await page.getByRole('button', { name: 'Start' }).click();
    await page.getByRole('button', { name: 'Reset' }).click();
  });