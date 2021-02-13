
import {Product} from '../../model/product';
import {ProductsService} from '../../services/products.service';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


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

  @Input() canChangeSelection = false;

  /**
   * liste des produits
   */
  productList: Product[];


  constructor(private productService: ProductsService) {

  }

  ngOnInit(): void {
    // récupération de la liste des produit
    this.productList = this.productService.getAllProduct();
    // si il y a plusieurs produits, alors on prend le premier et on le sélectionne
    if (this.productList && this.productList.some(v => true)){
      this.selectPlayer(this.productList[0]);
    }

  }

  /**
   * permet d'obtenir le joueur sélectionné
   */
  getSelectedProduct(): Product{
    return this.productService.selectedProduct;
  }

  /**
   * Permet la selection du joueur
   * @param pl : product à sélectionner
   */
  public selectPlayer(pl: Product): void {
    this.productService.selectProduct(pl);
    this.selectionChanged.emit(pl);
  }

  /**
   * Sélection par l'interface, possible uniquement si on peut changer la sélection
   */
  onSelectionChange(pl: Product): void{
    if (this.canChangeSelection)
    {
      this.productService.selectProduct(pl);
    }
  }
  /**
   * Indique si le joueur donné est sélectionné ou non
   */
  isSelected(pl: Product): boolean{
    return  pl == this.productService.selectedProduct;
  }

}
