import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products : Product [] = [
    new Product (1,'product 1','very nice product 1',1000),
    new Product (2,'product 2','very nice product 2',1400),
    new Product (3,'product 3','very nice product 3',1060),
    new Product (4,'product 4','very nice product 4',1050),
    new Product (5,'product 5','very nice product 5',1030),
    new Product (6,'product 6','very nice product 5',1100),
]


  constructor() { }
   
  getProducts(): Product[]{
    return this.products
  }
}
