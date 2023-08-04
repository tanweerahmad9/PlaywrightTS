import { Page } from "@playwright/test";

export default class from{
    page:Page
firstName ="#firstName";
lastName ="#lastName";

constructor(page:Page){
this.page = page;
}
async navigate(url:string) {
    await this.page.goto(url);
}
async enterfirstName(fname:string) {
    await this.page.locator(this.firstName).type(fname);

}
async enterlastName(lname:string) {
    await this.page.locator(this.lastName).type(lname);
}
}