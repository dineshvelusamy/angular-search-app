import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search-bar-comp',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchTxt: any;
  onlyStock: boolean;
  productSvc: any;

  @Input()
  productJsonObj: any;

  @Output()
  dataChanged = new EventEmitter<any>();

  constructor(@Inject("prodSvc") prodSvc: any) {
    this.searchTxt = "";
    this.onlyStock = false;
    this.productSvc = prodSvc;
    this.productJsonObj = {};
    this.onSearchTextChanged();
  }

  ngOnInit(): void {
  }

  onSearchTextChanged() {
    this.productJsonObj = this.productSvc.setSearchText(this.searchTxt, this.onlyStock);
    var criteria: any = new Object();
    criteria.searchText = this.searchTxt;
    criteria.onlyStock = this.onlyStock;
    this.dataChanged.emit(criteria);
  }

}
