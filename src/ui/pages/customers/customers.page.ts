import { SalesPortalPage } from "../salesPortal.page";

export class CustomersListPage extends SalesPortalPage {
  uniqueElement = '//h2[text()="Customers List "]';

  private readonly "Add New Customer button" = "button.page-title-header";
  private readonly "Edit button by table row" = (customer: string) =>
    `${this["Table row selector"](customer)}//button[@title="Edit"]`;

  async clickOnAddNewCustomer() {
    await this.click(this["Add New Customer button"]);
  }

  async clickOnEditCustomer(customerName: string) {
    await this.click(this["Edit button by table row"](customerName));
  }
}
