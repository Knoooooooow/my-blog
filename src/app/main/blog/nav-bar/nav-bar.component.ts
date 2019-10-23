import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { IndexService } from './../../shared/service/index/index.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    color: string;
    constructor(private router: Router,private rd:Renderer2,private indexService: IndexService) {

    }
    redirectToIndex() {
        this.router.navigate(['/main/blog/index']);
    }

    ngOnInit() {
    }
    displayMenu(){
        this.indexService.emitChange('resize');
    }
}
