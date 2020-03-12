import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef, OnDestroy } from '@angular/core';
import { DynamicComponent } from './../dynamic-component/dynamic.component';

@Component({
    selector: 'app-everything',
    templateUrl: './everything.component.html',
    styleUrls: ['./everything.component.scss']
})
export class EverythingComponent implements OnInit,OnDestroy {

    @ViewChild("alertContainer", { static: false, read: ViewContainerRef }) container: ViewContainerRef;
    constructor(private resolver: ComponentFactoryResolver) { }

    componentRef: ComponentRef<any>;
    ngOnInit() {

    }
    createComponent(type) {
        this.container.clear();
        const factory: ComponentFactory<any> =
            this.resolver.resolveComponentFactory(DynamicComponent);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.type = type;
    }

    ngOnDestroy() {
        // this.componentRef.destroy();
    }
}
