import { Directive, ElementRef, Renderer2, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[product-viewer]'
})
export class ProductViewer {

    constructor(public viewContainerRef: ViewContainerRef) {
        // this.;
    }
}