import { test } from "../../../fixtures/services.fixture";

test.describe.skip("[UI] [Customers] Smoke with fixtures", async function () {
  test.beforeEach(async function ({ signInService }) {
    await signInService.openSalesPortal();
  });

  test.afterEach(async function () {
    //TODO: delete customer
  });

  test("Create customer with valid data with fixture", async function ({
    homePageService,
    customersPageService,
    // addNewCustomerPageService,
  }) {
    await homePageService.openCustomersPage();
    await customersPageService.openAddNewCustomerPage();
    // await addNewCustomerPageService.create();
    //TODO: check customer in table
  });

  test("Validate created customer", async function ({ homePageService, customersApiService }) {
    await customersApiService.create();
    await homePageService.openCustomersPage();
  });
});
