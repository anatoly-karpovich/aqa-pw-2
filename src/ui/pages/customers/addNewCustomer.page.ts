import { ICustomer } from "../../../data/types/customers.types";
import { SalesPortalPage } from "../salesPortal.page";

export class AddNewCustomerPage extends SalesPortalPage {
  readonly uniqueElement = '//h2[.="Add New Customer "]';

  private readonly "Name input" = "#inputName";
  private readonly "Email input" = "#inputEmail";
  private readonly "Country dropdown" = "select#inputCountry";
  private readonly "City input" = "#inputCity";
  private readonly "Street input" = "#inputStreet";
  private readonly "House input" = "#inputHouse";
  private readonly "Flat input" = "#inputFlat";
  private readonly "Phone input" = "#inputPhone";
  private readonly "Notes textarea" = "#textareaNotes";
  private readonly "Save New Customer button" = "#save-new-customer";

  async fillInputs(customer: Partial<ICustomer>) {
    customer.name && (await this.setValue(this["Name input"], customer.name));
    customer.email && (await this.setValue(this["Email input"], customer.email));
    customer.country && (await this.selectDropdownValue(this["Country dropdown"], customer.country));
    customer.city && (await this.setValue(this["City input"], customer.city));
    customer.street && (await this.setValue(this["Street input"], customer.street));
    customer.house && (await this.setValue(this["House input"], customer.house));
    customer.flat && (await this.setValue(this["Flat input"], customer.flat));
    customer.phone && (await this.setValue(this["Phone input"], customer.phone));
    customer.notes && (await this.setValue(this["Notes textarea"], customer.notes));
  }

  async clickOnSaveButton() {
    await this.click(this["Save New Customer button"]);
  }
}
