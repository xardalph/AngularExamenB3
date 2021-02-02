import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Output() done = new EventEmitter();


  private product: Product;
  @Input() set inputProduct(value: Product){
    this.product = value;
    this.productForm.setValue(this.product);
  }

  getProduct(){
    return this.product;
  }


  constructor(private fb: FormBuilder, private productService: ProductsService) {

  }

  productForm = this.fb.group({
    id: [''],
    name: ['', [Validators.required]],
    texture: ['', [Validators.required]],
    grammage: ['', [Validators.required]],
    color: ['', [Validators.required]]

  });

  ngOnInit(): void {

  }
  onCancel(): void{
    this.done.emit();
  }
  submit(): void {
    this.product = this.productForm.value;
    this.productService.Updateproduct(this.product);
    this.productService.selectproduct(this.product);
    this.done.emit();
  }


  shouldShowRequiredError(control: AbstractControl): boolean{
    return !control.pristine && control.hasError('required');
  }

  shouldShowError(control: AbstractControl): boolean{
    return !control.pristine && control.invalid;
  }

}
