import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllCarsComponent} from './model/all-cars/all-cars.component';
import {ManageComponent} from './model/all-cars/manage/manage.component';
import {HomePageComponent} from './model/home-page/home-page.component';
import {ClientComponent} from './model/client/client.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'cars', component: AllCarsComponent},
  {path: 'cars/manage', component: ManageComponent},
  {path: 'cars/manage/:id', component: ManageComponent},
  {path: 'clients', component: ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
