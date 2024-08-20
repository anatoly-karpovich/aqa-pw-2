import _ from "lodash";
import { AddNewCustomerPage } from "../../pages/customers/addNewCustomer.page.js";
import { CustomersListPage } from "../../pages/customers/customers.page.js";
import { Page } from "@playwright/test";

export class CustomersListService {
  private customersPage: CustomersListPage;
  private addNewCustomerPage: AddNewCustomerPage;
  constructor(protected page: Page) {
    this.customersPage = new CustomersListPage(page);
    this.addNewCustomerPage = new AddNewCustomerPage(page);
  }

  async openAddNewCustomerPage() {
    await this.customersPage.clickOnAddNewCustomer();
    await this.customersPage.waitForSpinnerToHide();
    await this.addNewCustomerPage.waitForOpened();
  }
}
