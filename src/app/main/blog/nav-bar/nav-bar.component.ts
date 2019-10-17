import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    constructor(private router: Router) {

    }
    redirectToIndex() {
        this.router.navigate(['/main/blog/index']);
    }

    ngOnInit() {
    }

}
