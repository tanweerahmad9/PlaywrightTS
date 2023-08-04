import { chromium, test } from "@playwright/test";
test("Login test demo", async () => {

    const browser = await chromium.launch({
        headless : false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("//a[@data-toggle='dropdown']//span[cotains(.,'My account')]")
    await page.click("text=login")



})