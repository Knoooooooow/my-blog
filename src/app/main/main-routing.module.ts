import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
    {
        path: 'login', component:LoginComponent
    },
    {
        path: 'blog', loadChildren: () => import('./blog/blog.module').then(mod => mod.BlogModule),
    },
    {
        path: '', component:LoginComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
