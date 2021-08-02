import { Component, OnInit, Output, EventEmitter, Inject, Input } from '@angular/core';
import *  as  productData from '../../assets/productContent.json';

@Component({
  selector: 'product-table-comp',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  productSvc: any;

  @Input()
  productJsonObj: any;

  constructor(@Inject("prodSvc") prodSvc: any) {
    this.productSvc = prodSvc;
    this.productJsonObj = {};
  }

  ngOnInit(): void {
    // console.log(this.productJsonObj);
    this.productJsonObj = (productData as any).default;
  }

  onProdFilter() {
    // this.productJsonObj = this.productSvc.filterProduct();
  }

}
