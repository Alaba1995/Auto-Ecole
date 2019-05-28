import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackRoutingModule } from './back-routing.module';
import { BackLayoutComponent } from './back-layout/back-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [BackLayoutComponent, DashboardComponent, UsersComponent],
  imports: [
    CommonModule,
    BackRoutingModule
  ]
})
export class BackModule { }
