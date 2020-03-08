import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
    selector: 'app-test-sf-child',
    templateUrl: './test-sf-child.component.html',
    styleUrls: ['./test-sf-child.component.scss']
})
export class TestSfChildComponent implements OnInit {

    title = 'this is child component';
    display = false;
    @Input('customTemplateRef') customTemplateRef:ElementRef;

    myContext = {a:10, n: 'Svet'};

    constructor() { }

    ngOnInit() {

    }
    showTitle() {
        console.log(this.title);

    }

}
