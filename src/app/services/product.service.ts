import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private endpoint: string = 'https://young-sands-07814.herokuapp.com';
  constructor(private http: HttpClient) { }


}
