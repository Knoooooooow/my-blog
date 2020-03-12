import { Component, OnInit, Input, ElementRef, ContentChild, AfterContentInit } from '@angular/core';

@Component({
    selector: 'app-test-sf-child',
    templateUrl: './test-sf-child.component.html',
    styleUrls: ['./test-sf-child.component.scss']
})
export class TestSfChildComponent implements OnInit, AfterContentInit {

    title = 'this is child component';
    display = false;
    @Input('customTemplateRef') customTemplateRef: ElementRef;
    @ContentChild(ElementRef, { static: false }) element;

    myContext = { a: 10, n: 'Svet' };

    constructor() { }

    ngOnInit() {

    }
    showTitle() {
        console.log(this.title);

    }
    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        console.log(this.element);
    }
}
