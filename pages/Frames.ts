import {test, expect } from '@playwright/test'
test ('Frames', async ({page }) => {
    await page.goto ("https://stackoverflow.com/questions/72100106/playwright-vscode-gives-no-tests-found-message#:~:text=Update%20Node%20on%20your%20system,it%20works%20like%20a%20charm.")
    await page.locator('getby')
})