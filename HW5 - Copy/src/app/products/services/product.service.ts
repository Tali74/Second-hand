import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = "http://localhost:3000/products/";

  constructor(private httpClient: HttpClient) { }
  get(){
    return this.httpClient.get<Product[]>(this.url);
  }
  getById(id:number){
    return this.httpClient.get<Product>(this.url+id);
  }
  post(product:Product){
    return this.httpClient.post(this.url, product);
  }
  delete(id:number){
    return this.httpClient.delete(this.url+id);
  }
  put(product:Product){
    return this.httpClient.put(this.url+product.id, product);
  }
}
