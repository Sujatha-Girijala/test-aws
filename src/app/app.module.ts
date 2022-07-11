import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestAwsComponent } from './testingAWS/test-aws/test-aws.component';

@NgModule({
  declarations: [
    AppComponent,
    TestAwsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
