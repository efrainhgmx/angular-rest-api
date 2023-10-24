import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  showDetailProduct: boolean = false;
  products: Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      {
        next: (response: Product[]) => this.products = [...response],
        error: console.error
      }
    );
  }

  detailProduct(showDetail: Event | boolean):void {
    (showDetail) 
      ? this.showDetailProduct = !this.showDetailProduct 
      : this.showDetailProduct = showDetail as boolean;
  }

}
