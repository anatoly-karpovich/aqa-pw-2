import { test } from "../../../fixtures/services.fixture";

test.describe("[UI] [Customers] Smoke", async function () {
  test.beforeEach(async function ({ signInPageService }) {
    await signInPageService.openSalesPortal();
  });

  test.afterEach(async function ({ page }) {
    //TODO: delete customer
  });

  test("Create customer with valid data", async function ({
    homePageService,
    customersPageService,
    addNewCustomerPageService,
  }) {
    await homePageService.openCustomersPage();
    await customersPageService.openAddNewCustomerPage();
    await addNewCustomerPageService.create();
    //TODO: check customer in table
  });

  test.only("Validate created customer", async function ({
    homePageService,
    customersPageService,
    customersApiService,
    page,
  }) {
    const createdCustomer = customersApiService.create();
    await homePageService.openCustomersPage();
    await page.pause();
  });
});
