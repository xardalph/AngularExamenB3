import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './graphics/product/product.component';
import {ProductDetailComponent} from './graphics/product-detail/product-detail.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent},
  { path: '', component: ProductComponent},
  { path: 'productDetail/:id', component: ProductDetailComponent  },
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
