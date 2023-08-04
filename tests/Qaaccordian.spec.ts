import { expect, test } from "@playwright/test";
test('Accordian', async ({ page }) => {
    await page.goto("https://demoqa.com/accordian")
    await page.getByText('What is Lorem Ipsum?').click();
  await page.getByText('Where does it come from?').click();
  await page.getByText('Where does it come from?').click();
  await page.getByText('Why do we use it?').click();
  await page.getByText('Why do we use it?').click();
  await page.getByText('What is Lorem Ipsum?').click();
  await page.getByText('What is Lorem Ipsum?').click();
});
