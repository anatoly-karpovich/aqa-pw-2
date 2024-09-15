import { SalesPortalPage } from "./salesPortal.page.js";

export class HomePage extends SalesPortalPage {
  uniqueElement = '//strong[.="AQA User"]';

  readonly "Orders button" = this.findElement("#orders-from-home");
  readonly "Products button" = this.findElement("#products-from-home");
  readonly "Customers button" = this.findElement("#customers-from-home");

  readonly sideMenuElement = (itemName: "Products" | "Customers" | "Orders") =>
    `//a[text()[normalize-space() = '${itemName}']]`;

  async clickOnViewDetailsButton(moduleName: "Products" | "Customers" | "Orders") {
    await this.click(this[`${moduleName} button`]);
  }

  async openModule(module: "Products" | "Customers" | "Orders") {
    await this.click(this.sideMenuElement(module));
  }
}
