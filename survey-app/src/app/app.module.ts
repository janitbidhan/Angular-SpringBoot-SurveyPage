import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {SurveyComponent} from './survey/survey.component';
import {SurveyListComponent} from './survey-list/survey-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SurveyComponent,
    SurveyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


