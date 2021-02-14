import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-product-detail-url',
  templateUrl: './product-detail-url.component.html',
  styleUrls: ['./product-detail-url.component.css']
})
export class ProductDetailUrlComponent implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private route: ActivatedRoute, private ProductsService: ProductsService) {}

  public id: number;
  public product: Product;
  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.product = this.ProductsService.get(this.id);
    console.log(this.product.id);

  }

}
