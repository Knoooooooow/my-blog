import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { IndexComponent } from './index/index.component';
import { CanvasArcComponent } from './canvas-arc/canvas-arc.component';
import { PersonalPracticeComponent } from './personal-practice/personal-practice.component';


import { SharedModule } from '../shared/shared.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [BlogComponent, IndexComponent, CanvasArcComponent, PersonalPracticeComponent, NavBarComponent, SideBarComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
