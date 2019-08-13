import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: 'main',
                loadChildren: () => import('./main/main.module').then(mod => mod.MainModule),
            },
            {
                path: '',
                loadChildren: () => import('./main/main.module').then(mod => mod.MainModule),
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
/*
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        loadChildren: () => import('./main/main.module').then(mod => mod.MainModule),
    },
*/