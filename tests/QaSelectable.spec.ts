import { expect, test} from "@playwright/test";
test('Selectable',async ({ page }) => {
    await page.goto("https://demoqa.com/selectable")
    await page.getByText('Cras justo odio').click();
    await page.getByText('Dapibus ac facilisis in').click();
    await page.getByText('Morbi leo risus').click();
    await page.getByText('Porta ac consectetur ac').click();
    await page.getByRole('tab', { name: 'Grid' }).click();
    await page.getByText('One').click();
    await page.getByText('Two').click();
    await page.getByText('Five').click();
    await page.getByRole('tab', { name: 'List' }).click();
    await page.getByText('Cras justo odio').click();
    await page.getByText('Dapibus ac facilisis in').click();
    await page.getByText('Morbi leo risus').click();
    await page.getByText('Porta ac consectetur ac').click();
  });