import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackLayoutComponent } from './back-layout/back-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path : '' ,
  component: BackLayoutComponent ,
  children : [
    {path : 'dashboard',
    component : DashboardComponent},
    {path : 'users',
    component : UsersComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackRoutingModule { }
