import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/main/blog/index',
        pathMatch: 'full'
    },
    {
        path: 'index', component: IndexComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }
