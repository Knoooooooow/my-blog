import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';


const routes: Routes = [
    {
        path: '',
        component:BlogComponent,
        children:[
            {
                path: 'index',
                loadChildren: () => import('./index/index.module').then(mod => mod.IndexModule),
            },
            {
                path: '',
                redirectTo:'index',
                pathMatch:'full'
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }
