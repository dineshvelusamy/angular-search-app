import { AfterContentInit, AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, ViewContainerRef } from '@angular/core';
import { ProductRowComponent } from '../product-row/product-row.component';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  @Input()
  categoryName: string;

  @Input()
  rowData: any;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) {
    // console.log("Creating product category constructor");
    this.categoryName = "";
    this.rowData = {};
  }

  ngOnInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ProductRowComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    for (let rowItem of this.rowData) {
      const componentRef = containerRef.createComponent(componentFactory);
      componentRef.instance.rowData = rowItem;
    }
  }

}
