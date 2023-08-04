import { Page } from "@playwright/test";

export default class from{
    page:Page
firstName ="#firstName";
lastName ="#lastName";
name: any@example.com = "name@example.com";


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
async any@example.com(n @example.com:string) {
    await this.page.locator(this.name@example.com).type(n@example.com);

}
}