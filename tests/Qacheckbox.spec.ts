import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/checkbox');
  await page.locator('#tree-node').getByRole('img').nth(3).click();
  await page.locator('#tree-node path').nth(3).click();
});