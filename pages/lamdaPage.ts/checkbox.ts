import { expect, test } from "@playwright/test"
test ("checkbox", async({ page}) => {

    await page.goto("https://demoqa.com/checkbox")
    const singlecheckbox = await page.locator("selector= #tree-node > ol > li > span > label > span.rct-checkbox > svg")
    expect(singlecheckbox).not.toBeChecked();
    await singlecheckbox.check ();
    expect(singlecheckbox).toBeChecked();

});