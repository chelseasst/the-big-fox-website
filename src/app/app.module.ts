import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { OurStoryModule } from './our-story/our-story.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HoursAndLocationModule } from './hours-and-location/hours-and-location.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { GiftCardsModule } from './gift-cards/gift-cards.module';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './menu/menu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { AddEventComponent } from './admin/add-event/add-event.component';
@NgModule({
  declarations: [AppComponent, AddEventComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HomeModule,
    OurStoryModule,
    HttpClientModule,
    HoursAndLocationModule,
    GoogleMapsModule,
    GiftCardsModule,
    FormsModule,
    MenuModule,
    BrowserAnimationsModule,
    AdminModule
  ],
  // providers: [provideAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule { }
