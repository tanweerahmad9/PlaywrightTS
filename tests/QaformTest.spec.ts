import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('tanweer ');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('ahmad ');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('tanweer015@gmail.com');
  await page.getByText('Male', { exact: true }).click();
  await page.getByPlaceholder('Mobile Number').click();
  await page.getByPlaceholder('Mobile Number').fill('1234567890');
  await page.locator('#dateOfBirthInput').click();
  await page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('1');
  await page.getByLabel('Choose Friday, February 28th, 1997').click();
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('demo test ');
  await page.getByText('Sports').click();
  await page.getByText('Select State').click();
  await page.locator('#react-select-3-input').fill('bihar');
  await page.locator('div').filter({ hasText: /^Select City$/ }).first().click();
});