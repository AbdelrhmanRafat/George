import { Routes } from '@angular/router';
import { HomeLayoutComponent } from '../Layout/home-layout/home-layout.component';
import { HomeComponent } from '../Components/home/home.component';

export const routes: Routes = [
  {path : '' , component : HomeLayoutComponent, children : [
    {path : '' , redirectTo : 'Home', pathMatch : 'full'},
    {path : 'Home', component : HomeComponent, title : "Home"}
  ]}
];
