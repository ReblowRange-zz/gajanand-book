import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoAccountsComponent } from './demo-accounts/demo-accounts.component';
import { DemoDetailsDialogComponent } from './demo-details-dialog/demo-details-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { MidContentOneComponent } from './mid-content-one/mid-content-one.component';
import { StaticsComponent } from './statics/statics.component';
import { TelegramDialogComponent } from './telegram-dialog/telegram-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticsComponent,
    HeaderComponent,
    LandingComponent,
    MidContentOneComponent,
    DemoAccountsComponent,
    FooterComponent,
    DemoDetailsDialogComponent,
    TelegramDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
