import {Action} from "@ngrx/store";


export const LOAD_PRODUCTS = '[Products] Load PRODUCTS';
export const LOAD_PRODUCTS_FAIL = '[Products] Load PRODUCTS Fail';
export const LOAD_PRODUCTS_SUCCESS = '[Products] Load PRODUCTS Success';

export class LoadProducts implements Action {
  readonly type = LOAD_PRODUCTS
}
export class LoadProductsFail implements Action {
  readonly type = LOAD_PRODUCTS_FAIL
}
export class LoadProductsSuccess implements Action {
  readonly type = LOAD_PRODUCTS_SUCCESS
}

export type ProductsAction = LoadProducts |  LoadProductsFail | LoadProductsSuccess;
