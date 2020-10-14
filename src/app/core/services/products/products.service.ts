import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './../../models/product/product.module';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAllProducts() {
    const URL = environment.URL_API + '/products';
    return this.http.get<Product[]>(URL, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
           'Access-Control-Allow-Origin': '*'
         })
    });
  }

  getProduct(id: string) {
    const URL = environment.URL_API + '/products' + id;
    return this.http.get<Product>(URL);
  }

  createProduct(product: Product) {
    const URL = environment.URL_API + '/products' ;
    return this.http.post(URL, product);
  }

  editProduct(id: string, changes: Partial<Product>) {
    const URL = environment.URL_API + '/products' + id;
    return this.http.put(URL, changes);
  }

  deleteProduct(id: string) {
    const URL = environment.URL_API + '/products' + id;
    return this.http.delete(URL);
  }
}
