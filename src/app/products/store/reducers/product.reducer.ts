import {Product} from "../../models/product.model";
import * as fromProducts  from '../actions/products.action'
import {Action} from "@ngrx/store";

export interface ProductState {
  data: Product[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProductState = {
  data: [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": {
        id: 1 ,
        title:"men's clothing"
      },
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
  ],
  loaded: false,
  loading: false,
}
export function reducer(
  state= initialState,
  action: Action
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

export const getProductsLoading = (state: ProductState) => state.loading;
export const getProductsLoaded = (state: ProductState) => state.loaded;
export const getProducts = (state: ProductState) => state.data;
