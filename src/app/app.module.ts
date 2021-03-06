import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductFilter } from './services/productfilter.service';
import { FormsModule } from '@angular/forms';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductRowComponent } from './product-row/product-row.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ProductTableComponent,
    ProductCategoryComponent,
    ProductRowComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers:[{provide:"prodSvc",useClass:ProductFilter}],
  bootstrap: [AppComponent]
})
export class AppModule { }
