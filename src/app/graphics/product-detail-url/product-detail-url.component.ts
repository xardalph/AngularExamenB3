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
  isEditing = false;
  public id: number;
  public product: Product;
  public product$: Observable<Product>;


  ngOnInit(): void {

    // tslint:disable-next-line:radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.product$ = this.ProductsService.get(this.id)
      .pipe(
        tap((data) => {
          this.isReady = true;
          }));

  }

  onUpdate(): void {
    this.isEditing = true;
  }

  formDone(): void {
    this.isEditing = false;
    // Si nous ne récupérons pas les données depuis le service l'update peux c'être mal passé sans que l'utilisateur
    // soit au courant, les données étant mise à jour sur son poste en local
    this.product$ = this.ProductsService.get(this.id)
      .pipe(
        tap((data) => {
          this.isReady = true;
        }));

  }
}
