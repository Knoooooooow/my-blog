import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ThemePalette, MatMenuTrigger, MatDrawer } from '@angular/material';
import { Router } from '@angular/router';
import { IndexService } from './../../shared/service/index/index.service';
import { APP_SETTINGS } from '../../settings/settings';
import { ToastService } from '../../shared/components/toast/toast.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    @Input()
    color: ThemePalette;
    matMenu: any;
    mode = 'push';
    hasBackdrop = false;
    APP_SETTINGS = APP_SETTINGS;
    //side
    @ViewChild(MatMenuTrigger, { static: true }) trigger: MatMenuTrigger;
    @ViewChild('drawer', { static: true }) drawer: MatDrawer;
    constructor(private router: Router, private indexService: IndexService, private toastService: ToastService) {

    }
    redirectToIndex() {
        this.router.navigate(['main/blog/index']);
    }
    someMethod() {
        // this.trigger.openMenu();
        this.toastService.show({text: `Toast message`, type: 'success'});
    }

    ngOnInit() {
        this.indexService.changeEmitted$.subscribe(
            text => {
                if (text == 'resize') {
                    this.drawer.toggle();
                }
            });
    }
}
