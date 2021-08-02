import { Component } from '@angular/core';

@Component({
  selector: 'search-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search-app';
  resultData : any;

  passOnResults(prodData:any) {
    this.resultData = prodData;
  }
}
