import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';



@NgModule({
  declarations: [LoginComponent, MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
