import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../services/products.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private route: ActivatedRoute, private ProductsService: ProductsService) {
  }

  @Input() public product: Product;

  ngOnInit(): void {

    // this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.product = this.ProductsService.get(this.id);

  }

}
