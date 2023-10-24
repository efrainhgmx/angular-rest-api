import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/products.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private endpoint: string = 'https://young-sands-07814.herokuapp.com';
  constructor(private http: HttpClient) { }

  getAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>(`${this.endpoint}/api/products`);
  }
}
