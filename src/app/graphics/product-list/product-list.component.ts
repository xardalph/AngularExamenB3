import {Product} from '../../model/product';
import {ProductsService} from '../../services/products.service';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  /**
   * Envoi un événement à chauqe  modification de la sélection
   */
  @Output() selectionChanged = new EventEmitter<Product>();

  @Input() canChangeSelection = true;

  @Input() routeururl = 'productDetail';
  isReady = false;
  /**
   * liste des produits
   */
  productList: Product[];
  productListCount: number;
  productList$: Observable<Product[]>;

  constructor(private productService: ProductsService) {

  }

  ngOnInit(): void {
    // récupération de la liste des produit
    this.productList$ = this.productService.getAllProduct()
      .pipe(
        tap((data) => {
          this.isReady = true;
          this.productListCount = data.length;
          if (data.length){
            this.selectProduct(data[0]);
          }}));
    console.log('apres le suscribe');
    }



  /**
   * permet d'obtenir le joueur sélectionné
   */
  getSelectedProduct(): Product {
    return this.productService.selectedProduct;
  }

  /**
   * Permet la selection du joueur
   * @param pl : product à sélectionner
   */
  public selectProduct(pl: Product): void {
    if (this.canChangeSelection) {
      this.productService.selectProduct(pl);
      this.selectionChanged.emit(pl);
    }
  }

  /**
   * Sélection par l'interface, possible uniquement si on peut changer la sélection
   */

  /**
   * Indique si le joueur donné est sélectionné ou non
   */
  isSelected(pl: Product): boolean {
    return pl == this.productService.selectedProduct;
  }


}
