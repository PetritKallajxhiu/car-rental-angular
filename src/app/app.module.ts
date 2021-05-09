import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomePageComponent } from './model/home-page/home-page.component';
import { AllCarsComponent } from './model/all-cars/all-cars.component';
import { AddCarComponent } from './model/all-cars/add-car/add-car.component';
import { ReservationComponent } from './model/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AllCarsComponent,
    AddCarComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
