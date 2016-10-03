import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent }
  { path: '', component: DashboardComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
