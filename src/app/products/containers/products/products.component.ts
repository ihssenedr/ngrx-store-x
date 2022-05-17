import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductsService} from "../../services";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products : Product[] | undefined;
  constructor(private prodServ : ProductsService) { }

  ngOnInit(): void {
    this.prodServ.getProducts().subscribe(products => {
      console.log(products)
      this.products = products
    })
  }

}
