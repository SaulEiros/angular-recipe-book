import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appPlaceholder]'
})
export class PlaceholdeDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}