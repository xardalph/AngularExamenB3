import {ProductsService} from '../../services/products.service';
import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public selectedProduct: Product;

  routeururl = 'products';

  public isEditing = false;
  canChangeSelection: Product;

  constructor(private productsService: ProductsService) {
  }
  // this is not truly async, at first login the data is taken from the product-list component (async)
  // but if you go on another page then come back data will be show as loading until you change selection
  // this ngOnInit change that by taking the selected product in the service at creation
  // note that it can be any product if selected on another page
  ngOnInit(): void {
    if (!this.selectedProduct) {
      this.selectedProduct = this.productsService.getSelectedProduct();
    }

  }


  onUpdate(): void {
    this.isEditing = true;
  }

  onAdd(): void {
    this.selectedProduct = new Product();
    this.isEditing = true;
  }

  formDone(): void {
    this.isEditing = false;
    this.selectedProduct = this.productsService.selectedProduct;
  }

  onSelectionChanged($event: Product): void {
    this.selectedProduct = $event;

  }
}
