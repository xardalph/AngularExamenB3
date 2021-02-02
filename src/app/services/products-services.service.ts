import { Injectable } from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsServicesService {

  private ProductList: Product[] = [
    {
      id: 1,
      name: 'Jim',
      texture: 'JIIIM',
      grammage: 85,
      color: 'vert'
    }
    ,
    {
      id: 2,
      name: 'Pete',
      texture: 'PEEETE',
      grammage: 92,
      color: 'vert'
    }, {
      id: 3,
      name: 'Pat',
      texture: 'PAAAT',
      grammage: 23,
      color: 'bleu'
    }, {
      id: 4,
      name: 'Stephan',
      texture: 'STEPHAAAN',
      grammage: 56,
      color: 'gris'
    },
    {
      id: 5,
      name: 'Rapha',
      texture: 'fin',
      grammage: 94,
      color: 'jaune'
    }
  ];


  constructor() { }
}
