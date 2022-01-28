import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
url = 'http://localhost:3000/products/';

  constructor(private http : HttpClient) { }

  getProduit(name : string){
    return this.http.get<Product[]>(this.url+"?categorie="+name);
  }
}
