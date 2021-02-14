import {ProductsService} from '../../services/products.service';
import {Component, Input} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  constructor(private productsService: ProductsService){}
  public selectedProduct: Product;

  @Input() routeururl = 'product';

  public isEditing = false;
  canChangeSelection: Product;

  onSelectionChanged(data: Product): void{
    this.selectedProduct = data;
  }

  onUpdate(): void{
    this.isEditing = true;
  }
  onAdd(): void{
    this.selectedProduct = new Product();
    this.isEditing = true;
  }
  formDone(): void{
    this.isEditing = false;
    this.onSelectionChanged(this.productsService.selectedProduct);
  }
}
