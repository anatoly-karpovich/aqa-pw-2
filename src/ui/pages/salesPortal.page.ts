import { BasePage } from "./base.page.js";

export abstract class SalesPortalPage extends BasePage {
  protected readonly spinner = this.findElement(".spinner-border");
  protected readonly toastMessage = this.findElement("#toast .toast-body");
  abstract readonly uniqueElement: string;

  async waitForOpened() {
    await this.waitForElement(this.uniqueElement);
  }

  async waitForSpinnerToHide() {
    await this.waitForElement(this.spinner, "hidden");
  }

  async getToastMessage() {
    const text = await this.getText(this.toastMessage);
    return text;
  }
}
