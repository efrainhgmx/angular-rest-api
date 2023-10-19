import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnChanges{

  @Input() showDetail:boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.onShowDetail();
  }

  onShowDetail():void {
    console.log(this.showDetail)
    this.showDetail = !this.showDetail;
  }
}
