import {Product} from "../../models/product.model";
import * as fromProducts  from '../actions/products.action'
export interface ProductState {
  data: Product[];
  loaded: boolean;
  loading: boolean;
}
export const initialState: ProductState = {
  data: [],
  loaded: false,
  loading: false,
}
export function reducer(
  state= initialState,
  action: fromProducts.ProductsAction
): ProductState {
  switch (action.type) {
    case fromProducts.LOAD_PRODUCTS : {
      return {
        ...state,
        loading: true
      };
    }
    case fromProducts.LOAD_PRODUCTS_FAIL : {
      return {
        ...state,
        loading: false,
        loaded: false

      };
    }
    case fromProducts.LOAD_PRODUCTS_SUCCESS : {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
  }
  return state
}
