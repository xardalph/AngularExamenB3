import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private ProductList: Product[] = [
    {
      id: 1,
      name: 'Jim',
      texture: 'JIIIM',
      grammage: 85,
      color: 'vert'
    }
    ,
    {
      id: 2,
      name: 'Pete',
      texture: 'PEEETE',
      grammage: 92,
      color: 'vert'
    }, {
      id: 3,
      name: 'Pat',
      texture: 'PAAAT',
      grammage: 23,
      color: 'bleu'
    }, {
      id: 4,
      name: 'Stephan',
      texture: 'STEPHAAAN',
      grammage: 56,
      color: 'gris'
    },
    {
      id: 5,
      name: 'Rapha',
      texture: 'fin',
      grammage: 94,
      color: 'jaune'
    }
  ];

  public selectedProduct: Product;

  constructor(private http: HttpClient) {
    if (this.ProductList && this.ProductList.length){
      this.selectedProduct = this.ProductList[0];
    }

  }

  getAllProduct(): Product[]{

    return this.ProductList;
  }

  selectProduct(pl: Product): void{
    this.selectedProduct = pl;
  }

  UpdateProduct(product: Product): void {
    if (product.id == 0){
      product.id = Math.max(0, ...this.ProductList.map(pl => pl.id)) + 1;
      this.ProductList.push(product);
    }else{
      const productIndex = this.ProductList.findIndex(pl => pl.id == product.id);
      this.ProductList[productIndex] = product;
    }
  }
  get(idproduct: number): Product {
    return this.ProductList[this.ProductList.findIndex(pl => pl.id == idproduct)];
  }



}
