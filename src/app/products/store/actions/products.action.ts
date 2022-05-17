import {Action} from "@ngrx/store";

import {Product} from "../../models/product.model";

export const LOAD_PRODUCTS = '[Products] Load PRODUCTS';
export const LOAD_PRODUCTS_FAIL = '[Products] Load PRODUCTS Fail';
export const LOAD_PRODUCTS_SUCCESS = '[Products] Load PRODUCTS Success';

export class LoadProducts implements Action {
  readonly type = LOAD_PRODUCTS
}
export class LoadProductsFail implements Action {
  readonly type = LOAD_PRODUCTS_FAIL
  constructor(public payload: any) {}
}
export class LoadProductsSuccess implements Action {
  readonly type = LOAD_PRODUCTS_SUCCESS
  constructor(public payload: Product[]) {}
}

export type ProductsAction = LoadProducts |  LoadProductsFail | LoadProductsSuccess;
