import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanvasArcComponent } from './canvas-arc/canvas-arc.component';
import { IndexComponent } from './index.component';
import { PersonalPracticeComponent } from './personal-practice/personal-practice.component';
import { CalendarComponent } from './calendar/calendar.component';


const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
            {
                path: 'canvas-arc', component: CanvasArcComponent 
            },
            {
                path: 'personal-practice', component: PersonalPracticeComponent 
            },
            {
                path: 'calendar', component: CalendarComponent
            },
            
            {
                path: '', 
                redirectTo: 'canvas-arc', 
                pathMatch: 'full'
            },
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IndexRoutingModule { }
