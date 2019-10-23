import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'blog',
                loadChildren: () => import('./blog/blog.module').then(mod => mod.BlogModule),
            },
            {
                path: '',
                redirectTo: 'blog',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
/*
    {
        path: '',
        redirectTo: '/main/blog',
        pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then(mod => mod.BlogModule),
    },
 */