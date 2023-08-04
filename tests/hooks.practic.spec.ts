import { Expect, expect, test } from "@playwright/test";
test.beforeAll(async({browser}) => {
    console.log(browser.version());
});
test.afterAll(async({page})=> {
    await page.close();
});
test.beforeEach(async({ context }) => {
    await context.clearPermissions();
});

test.afterEach(async({ context }) => {
    await context.clearCookies();
});

test("test01", async ({ page }) => {
    await page.goto ("https://chat.openai.com/chat");
    expect(page.url()).toContain("openai");
});

test("test02", async({ page }) => {
    await page.goto("http://playwright.dev/docs/test-fixture");
    expect(page.url()).toContain("fixture");
});
