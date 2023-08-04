import {test, expect } from '@playwright/test'
test ('buttons', async ({page }) => {
    await page.goto("https://demoqa.com/buttons")
    await page.getByRole('button', { name: 'Double Click Me' }).click();
    await page.getByRole('button', { name: 'Right Click Me' }).click({
      button: 'right'
    });
    await page.getByRole('button', { name: 'Click Me', exact: true }).click();
  });
