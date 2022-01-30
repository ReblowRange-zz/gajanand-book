import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaticsComponent } from './statics/statics.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { MidContentOneComponent } from './mid-content-one/mid-content-one.component';
import { DemoAccountsComponent } from './demo-accounts/demo-accounts.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticsComponent,
    HeaderComponent,
    LandingComponent,
    MidContentOneComponent,
    DemoAccountsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
