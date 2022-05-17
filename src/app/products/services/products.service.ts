import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';

import { catchError } from 'rxjs/operators';
import {Product} from "../models/product.model";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   baseUrl = 'https://fakestoreapi.com/'
  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]> {
     return this.http
       .get<Product[]>(this.baseUrl+'products')
       .pipe(catchError((error) => {return throwError(error.json())}));
  }
  createProduct(payload: Product) : Observable<Product> {
     return this.http
       .post<Product>(this.baseUrl+'products', payload)
       .pipe(catchError((error) => {return throwError(error.json())}));
  }
  updateProduct(payload: Product): Observable<Product>{
     return this.http
       .put<Product>(this.baseUrl+`products/${payload.id}`, payload)
       .pipe(catchError((error) => {return throwError(error.json())}));
  }
  removeProduct(payload: Product): Observable<Product> {
     return this.http
       .delete<any>(this.baseUrl+`products/${payload.id}`)
       .pipe(catchError((error) => {return throwError(error.json())}));
  }
}
