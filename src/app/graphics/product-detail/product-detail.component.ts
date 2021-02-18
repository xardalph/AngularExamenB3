import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() {
  }

  @Input() public product: Product;

  ngOnInit(): void {
    console.log(this.product);
    console.log('this was the product in ngOnInit');

  }

}
