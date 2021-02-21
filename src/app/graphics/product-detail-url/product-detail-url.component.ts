import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../services/products.service';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-detail-url',
  templateUrl: './product-detail-url.component.html',
  styleUrls: ['./product-detail-url.component.css']
})
export class ProductDetailUrlComponent implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private route: ActivatedRoute, private ProductsService: ProductsService) {}

  isReady = false;
  public id: number;
  public product: Product;
  public product$: Observable<Product>;

  ngOnInit(): void {

    // tslint:disable-next-line:radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.product$ = this.ProductsService.get(this.id)
      .pipe(
        tap((data) => {
          console.log('Startting tap.');
          this.isReady = true;
          console.log('Is Ready changed');
          this.product = data;
          console.log('data put in product.');

          }));

  }

}
