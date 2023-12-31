import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Product } from 'src/app/models/products.models';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent{

  @Input() productInfo!: Product;
  @Output() showDetail =  new EventEmitter<boolean>(false);
  @Output() idProduct = new EventEmitter<number>();

  showDetailProduct(id: number):void {
    this.showDetail.emit(true);
    this.idProduct.emit(id);
  }
}
