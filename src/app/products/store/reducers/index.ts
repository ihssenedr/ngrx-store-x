import {ActionReducerMap} from "@ngrx/store";
import * as fromProduct from './product.reducer'

export interface ProductsSate {
  product: fromProduct.ProductState
}

export const reducers : ActionReducerMap<ProductsSate> = {
  products: fromProduct.reducer,
}
