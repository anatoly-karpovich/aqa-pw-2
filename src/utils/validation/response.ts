import Ajv from "ajv";
import { IResponse } from "../../data/types/api.types";
import { IResponseFields } from "../../data/types/api.types";
import { expect } from "@playwright/test";

export function validateSchema<T extends IResponseFields>(response: IResponse<T>, schema: object) {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const isValidSchema = validate(response.body);
  if (validate.errors) {
    console.log(validate.errors);
  }
  expect(isValidSchema).toBe(true);
}

export function validateResponse<T extends IResponseFields>(
  response: IResponse<T>,
  status: number,
  IsSuccess: boolean,
  ErrorMessage: null | string
) {
  expect(response.status).toBe(status);
  expect(response.body.IsSuccess).toBe(IsSuccess);
  expect(response.body.ErrorMessage).toBe(ErrorMessage);
}
