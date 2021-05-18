import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomePageComponent} from './model/home-page/home-page.component';
import {AllCarsComponent} from './model/all-cars/all-cars.component';
import {ManageComponent} from './model/all-cars/manage/manage.component';
import {ReservationComponent} from './model/reservation/reservation.component';
import {ClientComponent} from './model/client/client.component';
import {BrandComponent} from './model/brand/brand.component';
import {BrandManageComponent} from './model/brand/brand-manage/brand-manage.component';
import {ReservationManageComponent} from './model/reservation/reservation-manage/reservation-manage.component';
import { BannerComponent } from './model/banner/banner.component';
import { BannerManageComponent } from './model/banner/banner-manage/banner-manage.component';
import { BlogComponent } from './model/blog/blog.component';
import { BlogManageComponent } from './model/blog/blog-manage/blog-manage.component';
import { CommentComponent } from './model/comment/comment.component';
import { CommentManageComponent } from './model/comment/comment-manage/comment-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AllCarsComponent,
    ManageComponent,
    ReservationComponent,
    ClientComponent,
    BrandComponent,
    BrandManageComponent,
    ReservationManageComponent,
    BannerComponent,
    BannerManageComponent,
    BlogComponent,
    BlogManageComponent,
    CommentComponent,
    CommentManageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
