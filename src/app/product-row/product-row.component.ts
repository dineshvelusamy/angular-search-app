import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {

  @Input()
  rowData:any;

  constructor() { 
    // console.log("Inside product row component constructor");
    this.rowData = {};
    this.rowData.name="default name";
  }

  ngOnInit(): void {
  }

}
