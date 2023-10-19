import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  showDetail:boolean = false;


  onShowDetail():void {
    this.showDetail = !this.showDetail;
  }
}
