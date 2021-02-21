import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './graphics/product/product.component';
import {ProductDetailUrlComponent} from './graphics/product-detail-url/product-detail-url.component';
import {ProductListComponent} from './graphics/product-list/product-list.component';
import {ProductListUrlComponent} from './graphics/product-list-url/product-list-url.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent},
  { path: 'products/:id', component: ProductComponent},
  { path: '', component: ProductComponent},
  { path: 'productList', component: ProductListUrlComponent},
  { path: 'productDetail/:id', component: ProductDetailUrlComponent  },
  { path: 'productListNew', component: ProductListUrlComponent  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
