import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { IndexComponent } from './index/index.component';
import { CanvasArcComponent } from './canvas-arc/canvas-arc.component';
import { PersonalPracticeComponent } from './personal-practice/personal-practice.component';


@NgModule({
  declarations: [BlogComponent, IndexComponent, CanvasArcComponent, PersonalPracticeComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
