import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { newPageComponent } from './new.page.component';
import { AwsomeComponentComponent } from './awsome-component/awsome-component.component';

@NgModule({
  declarations: [
    AppComponent,newPageComponent, AwsomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
