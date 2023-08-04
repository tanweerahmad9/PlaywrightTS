import {test, expect } from '@playwright/test'
test ('Droppable', async ({page }) => {
    await page.goto("https://demoqa.com/droppable")
    await page.locator('#app div').filter({ hasText: 'SimpleAxis RestrictedContainer RestrictedCursor StyleDrag meOnly XOnly YI\'m cont' }).nth(3).click();
  await page.locator('#app div').filter({ hasText: 'SimpleAxis RestrictedContainer RestrictedCursor StyleDrag meOnly XOnly YI\'m cont' }).nth(3).click();
  await page.getByRole('tab', { name: 'Axis Restricted' }).click();
  await page.locator('#app div').filter({ hasText: 'SimpleAxis RestrictedContainer RestrictedCursor StyleDrag meOnly XOnly YI\'m cont' }).nth(3).click();
  await page.locator('#app div').filter({ hasText: 'SimpleAxis RestrictedContainer RestrictedCursor StyleDrag meOnly XOnly YI\'m cont' }).nth(3).click();
  await page.getByRole('tab', { name: 'Container Restricted' }).click();
  await page.locator('#containmentWrapper').click();
  await page.getByLabel('Container Restricted').click();
  await page.getByRole('tab', { name: 'Cursor Style' }).click();
  await page.getByText('I will always stick to the centerMy cursor is at top leftMy cursor is at bottom').click();
  await page.getByText('I will always stick to the centerMy cursor is at top leftMy cursor is at bottom').click();
  await page.getByText('I will always stick to the centerMy cursor is at top leftMy cursor is at bottom').click();
});