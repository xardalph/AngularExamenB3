import {Component, Input, OnInit, Output} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../model/product';

import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EventEmitter} from '@angular/core';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Input() set inputProduct(value: Product){
    this.product = value;
    this.productForm.setValue(this.product);
  }


  constructor(private fb: FormBuilder, private productService: ProductsService) {

  }

  @Output() done = new EventEmitter();

  private product: Product;

  productForm = this.fb.group({
    id: [''],
    name: ['', [Validators.required]],
    texture: ['', [Validators.required]],
    grammage: ['', [Validators.required]],
    color: ['', [Validators.required]]

  });

  getProduct(): Product{
    return this.product;
  }

  ngOnInit(): void {

  }
  onCancel(): void{
    this.done.emit();
  }
  submit(): void {
    this.product = this.productForm.value;
    this.productService.UpdateProduct(this.product);
    this.productService.selectProduct(this.product);
    this.done.emit();
  }


  shouldShowRequiredError(control: AbstractControl): boolean{
    return !control.pristine && control.hasError('required');
  }

  shouldShowError(control: AbstractControl): boolean{
    return !control.pristine && control.invalid;
  }

}
