import {ProductsService} from '../../services/products.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  constructor(private productsService: ProductsService){}
  public selectedPlayer: Product;

  public isEditing = false;

  onSelectionChanged(data: Product): void{
    this.selectedPlayer = data;
  }

  onUpdate(): void{
    this.isEditing = true;
  }
  onAdd(): void{
    this.selectedPlayer = new Product();
    this.isEditing = true;
  }
  formDone(): void{
    this.isEditing = false;
    this.onSelectionChanged(this.productsService.selectedProduct);
  }
}
