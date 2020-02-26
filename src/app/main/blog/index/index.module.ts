import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { IndexComponent } from './index.component';
import { CanvasArcComponent } from './canvas-arc/canvas-arc.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { PersonalPracticeComponent } from './personal-practice/personal-practice.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DynamicTreeComponent } from './dynamic-tree/dynamic-tree.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
    declarations: [
        IndexComponent,
        CanvasArcComponent,
        NavBarComponent,
        SideBarComponent,
        PersonalPracticeComponent,
        CalendarComponent,
        DynamicTreeComponent
    ],
    imports: [
        SharedModule,
        IndexRoutingModule,
        CommonModule,
        QuillModule
    ]
})
export class IndexModule { }
