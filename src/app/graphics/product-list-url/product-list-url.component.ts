import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list-url',
  templateUrl: './product-list-url.component.html',
  styleUrls: ['./product-list-url.component.css']
})
export class ProductListUrlComponent implements OnInit {
  isEditing = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(): void {
    this.isEditing = true;
  }

  formDone(): void {
    this.isEditing = false;
  }
}
