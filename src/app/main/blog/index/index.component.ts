import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ThemePalette, MatMenuTrigger } from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    @Input()
    color: ThemePalette;
    matMenu:any;

    @ViewChild(MatMenuTrigger,{ static: true }) trigger: MatMenuTrigger;

    constructor(private router:Router) {

    }
    redirectToIndex(){
        this.router.navigate(['main/blog/index']);
    }
    someMethod() {
        this.trigger.openMenu();
    }
    
    ngOnInit() {

    }

}
