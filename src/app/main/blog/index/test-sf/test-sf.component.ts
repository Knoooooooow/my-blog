import { Component, OnInit, ContentChild, ViewChild, TemplateRef, AfterViewInit, AfterContentInit, ElementRef, ViewContainerRef } from '@angular/core';
import { TestSfChildComponent } from '../test-sf-child/test-sf-child.component';

@Component({
    selector: 'app-test-sf',
    templateUrl: './test-sf.component.html',
    styleUrls: ['./test-sf.component.scss']
})
export class TestSfComponent implements OnInit, AfterViewInit, AfterContentInit {

    @ContentChild(TestSfChildComponent, { static: true })
    childCmp: TestSfChildComponent;

    @ViewChild('tpl', { static: false })
    tpl: TemplateRef<any>;
    constructor(private el:ElementRef,private viewContainerRef :ViewContainerRef) { }

    ngOnInit() {
    }

    ngAfterContentInit() {
        if (this.childCmp) {
            console.log(this.childCmp);
        }
    }
    ngAfterViewInit() {
        console.log(this.tpl);
    }
}
