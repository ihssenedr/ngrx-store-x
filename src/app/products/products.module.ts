import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import * as fromServices from './services'
import * as fromContainers from './containers'
import {RouterModule, Routes} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.ProductsComponent,
  }
];
@NgModule({
  declarations: [
    ...fromContainers.containers
  ],
  providers :[...fromServices.services],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('products', reducers),
  ]
})
export class ProductsModule { }
