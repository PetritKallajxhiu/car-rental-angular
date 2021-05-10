import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HomePageComponent} from './model/home-page/home-page.component';
import {AllCarsComponent} from './model/all-cars/all-cars.component';
import {ManageComponent} from './model/all-cars/manage/manage.component';
import {ReservationComponent} from './model/reservation/reservation.component';
import {ClientComponent} from './model/client/client.component';
import { BrandComponent } from './model/brand/brand.component';
import { BrandManageComponent } from './model/brand/brand-manage/brand-manage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AllCarsComponent,
    ManageComponent,
    ReservationComponent,
    ClientComponent,
    BrandComponent,
    BrandManageComponent
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
