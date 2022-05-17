import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import * as fromServices from './services'
import * as fromContainers from './containers'
import {RouterModule, Routes} from "@angular/router";
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
  ]
})
export class ProductsModule { }
