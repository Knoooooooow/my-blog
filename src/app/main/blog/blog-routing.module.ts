import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CanvasArcComponent } from './canvas-arc/canvas-arc.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/main/blog/index',
        pathMatch: 'full'
    },
    {
        path: 'index', component: IndexComponent
    },
    {
        path: 'canvas-arc', component: CanvasArcComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }
