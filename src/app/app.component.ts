import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search-app';
  resultData : any;

  searchCriteria: any;

  constructor() {  }

  // passOnResults(prodData:any) {
  //   this.resultData = prodData;
  // }

  onFilterProducts(criteria:any) {
    console.log(criteria.onlyStock);
    this.searchCriteria = criteria;
  }
}
