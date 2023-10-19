import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showDetailProduct: boolean = false;

  detailProduct(showDetail: Event | boolean):void {
    (showDetail) 
      ? this.showDetailProduct = !this.showDetailProduct 
      : this.showDetailProduct = showDetail as boolean;
  }

}
