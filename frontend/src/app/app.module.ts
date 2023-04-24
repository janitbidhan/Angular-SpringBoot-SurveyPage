import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CompDateComponent } from './comp-date/comp-date.component';
import { FormsModule} from '@angular/forms';
import { TestService } from './test.service';
import { Route, RouterModule, Routes } from '@angular/router';

const objectRoutes:Routes=[
{
  path:"survey",
  component:BodyComponent,
}]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    CompDateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(objectRoutes)
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
