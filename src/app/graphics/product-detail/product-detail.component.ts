import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() public selectedProduct: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
