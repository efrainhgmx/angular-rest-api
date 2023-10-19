import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent{

  @Output() showDetail =  new EventEmitter<boolean>(false);

  showDetailProduct():void {
    this.showDetail.emit(true);
  }
}
