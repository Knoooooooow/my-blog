import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-dynamic-component',
    templateUrl: './dynamic.component.html',
    styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {

    @Input() type: string = "success";
    constructor() { }

    ngOnInit() {
    }

}
