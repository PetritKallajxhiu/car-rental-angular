import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllCarsComponent} from './model/all-cars/all-cars.component';
import {AddCarComponent} from './model/all-cars/add-car/add-car.component';
import {HomePageComponent} from './model/home-page/home-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'cars', component: AllCarsComponent},
  {path: 'cars/manage', component: AddCarComponent},
  {path: 'cars/manage/:id', component: AddCarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
