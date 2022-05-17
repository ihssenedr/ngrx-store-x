import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

import * as fromProduct from './product.reducer'

export interface ProductsSate {
  products: fromProduct.ProductState
}

export const reducers : ActionReducerMap<ProductsSate> = {
  products : fromProduct.reducer,
};

export const getProductsState = createFeatureSelector<ProductsSate>(
  'products'
);

export const getProductState = createSelector(
  getProductsState,
  (state: ProductsSate) => state.products
)
export const getAllProducts = createSelector(getProductState , fromProduct.getProducts);

export const getProductLoaded = createSelector(
  getProductState,
  fromProduct.getProductsLoaded
);

export const getProductLoading = createSelector(
  getProductState,
  fromProduct.getProductsLoading
);
