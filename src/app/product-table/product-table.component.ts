import { Component, OnInit, Output, EventEmitter, Inject, Input, ComponentFactoryResolver, ViewContainerRef, OnChanges, SimpleChanges, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import *  as  productData from '../../assets/productContent.json';
import { ProductCategoryComponent } from '../product-category/product-category.component';

@Component({
  selector: 'product-table-comp',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  productSvc: any;
  componentList: any;

  @Input()
  productJsonObj: any;

  @Input()
  searchCriteria: any;

  @ViewChild('prodcontainer', { static: false, read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

  constructor(@Inject("prodSvc") prodSvc: any,
    private componentFactoryResolver: ComponentFactoryResolver) {
    this.productSvc = prodSvc;
    this.productJsonObj = {};
    this.searchCriteria = {};
    this.productJsonObj = (productData as any).default;
    this.componentList = new Array<any>();
  }
  ngAfterViewInit(): void {
    this.searchCriteria = {};
    this.productJsonObj = (productData as any).default;
    this.onProdFilter();
  }
  ngOnDestroy(): void {
    this.componentList.map((cm: any, i: number) => {
      let tmp = this.viewContainerRef;
      this.viewContainerRef.remove(this.viewContainerRef.indexOf(cm));
      this.viewContainerRef.remove(i);
      this.componentList.splice(i, 1);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchCriteria'] && changes['searchCriteria'].previousValue != changes['searchCriteria'].currentValue) {
      this.productJsonObj = (productData as any).default;
      this.onProdFilter();
    }
  }

  ngOnInit(): void {
  }

  onProdFilter() {
    this.productJsonObj = this.productSvc.filterProduct(
      this.searchCriteria.searchText, this.searchCriteria.onlyStock);

    var categories = new Set<string>();
    for (let item of this.productJsonObj) {
      categories.add(item.category);
    }

    const componentFactory = this.componentFactoryResolver.
      resolveComponentFactory(ProductCategoryComponent);
    let containerRef = this.viewContainerRef;
    containerRef.clear();
    for (let catItem of categories) {
      let componentRef = containerRef.createComponent(componentFactory);
      this.componentList.push(componentRef);
      componentRef.instance.categoryName = catItem;
      var rowDetails = this.productJsonObj.filter((obj: { [x: string]: string; }) => {
        return obj['category'] == catItem;
      }
      );
      componentRef.instance.rowData = rowDetails;
    }

  }

}
