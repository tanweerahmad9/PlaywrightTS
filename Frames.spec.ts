import{test, expect } from '@playwright/test'
test ('Frames', async({page }) => {
    await page.goto("https://www.sarkariresult.com/")
    const allframes = page.frames();
    console.log("No of frames: " + allframes.length);

});