import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadServiceService } from './main/service/load-service/load-service.service';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { ToastModule } from './main/shared/components/toast/toast.module';

export function get_settings(appLoadService: LoadServiceService) {
    return () => appLoadService.getSettings();
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    QuillModule.forRoot(),

    ToastModule.forRoot()
  ],
  providers: [
    LoadServiceService,
    { provide: APP_INITIALIZER, useFactory: get_settings, deps: [LoadServiceService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
