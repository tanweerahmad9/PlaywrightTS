import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('Tanweer ahmad ');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('tanweer015@gmail.com');
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('patna bihar ');
  await page.locator('#permanentAddress').click();
  await page.getByPlaceholder('Current Address').click();
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('patna bihar');
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('hyderabad');
  await page.getByRole('button', { name: 'Submit' }).click();
});
