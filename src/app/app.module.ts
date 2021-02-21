import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './graphics/product/product.component';
import { ProductDetailComponent } from './graphics/product-detail/product-detail.component';
import { ProductListComponent } from './graphics/product-list/product-list.component';
import { ProductFormComponent } from './graphics/product-form/product-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailUrlComponent } from './graphics/product-detail-url/product-detail-url.component';
import { ProductListUrlComponent } from './graphics/product-list-url/product-list-url.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductDetailUrlComponent,
    ProductListUrlComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
