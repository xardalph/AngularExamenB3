import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {map, shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private ProductList: Product[];

  public selectedProduct: Product;

  constructor(private http: HttpClient) {
    if (this.ProductList && this.ProductList.length) {
      this.selectedProduct = this.ProductList[0];
    }

  }

  private getAllProductAsync$ = this.http.get<Product[]>('assets/ProductList.json').pipe(
    map((data: Product[]) => {
      // création d'un autre tableau
      const result: Product[] = [];
      data.forEach(element => {
        result.push(new Product(element));
      });
      this.ProductList = result;
      return result;

      // autre méthode (plus élégante mais attention à la confusion avec map (rxjs) et map (sur les tableaux))
      //  => équivalent du .Select en c# avec Linq => cette fonction map s'applique sur les tableaux
      // return data.map(e => new Product(e));
    }),
    shareReplay(1),
    map((d) => this.ProductList)
  );


  getAllProduct(): Observable<Product[]> {
    return this.getAllProductAsync$;
    // return this.ProductList;
    // return this.http.get<Product[]>('assets/ProductList.json');

  }

  selectProduct(pl: Product): void {
    this.selectedProduct = pl;
  }

  UpdateProduct(product: Product): void {
    if (product.id == 0) {
      product.id = Math.max(0, ...this.ProductList.map(pl => pl.id)) + 1;
      this.ProductList.push(product);
    } else {
      const productIndex = this.ProductList.findIndex(pl => pl.id == product.id);
      this.ProductList[productIndex] = product;
    }
  }

  get(idproduct: number): Observable<Product> {
    return this.getAllProduct();
  }


}
