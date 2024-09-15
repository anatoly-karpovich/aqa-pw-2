import { MANUFACTURERS } from "../../data/types/product.types";
import { test, expect } from "../../fixtures/services.fixture";

test.describe("[API] Products", async function () {
  test("Create product", async function ({ product }) {
    await product.create();
    await product.delete();
  });

  test("Fail to create product", async function ({ product }) {
    try {
      await product.create({ name: "" });
    } catch (err) {
      expect((err as Error).message).toBe(
        "Failed to create product - Status code: 400, IsSuccess: false, ErrorMessage: Incorrect request body"
      );
    }
  });

  test("Create from existing and delete", async function ({ product }) {
    product.createFromExisting({
      _id: "66e70774fd0a2ec681e6d35d",
      name: "Computer11845",
      amount: 2,
      price: 100,
      manufacturer: MANUFACTURERS.TESLA,
      createdOn: "2024-09-15T16:12:00.000Z",
      notes: "Test notes",
    });
    await product.delete();
  });
});
