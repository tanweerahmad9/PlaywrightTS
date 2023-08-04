import {test, expect } from '@playwright/test'
test ('Profiles', async ({ page }) => {
    await page.goto("https://demoqa.com/profile")
    await page.getByRole('link', { name: 'login' }).click();
    await page.getByRole('button', { name: 'New User' }).click();
    await page.getByRole('button', { name: 'Back to Login' }).click();
    await page.getByRole('link', { name: 'register' }).click();
  });