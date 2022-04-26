import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboadOneComponent } from './dashboad-v1/dashboad-v1.component';
import { DashboardTwoComponent } from './dashboard-v2/dashboard-v2.component';

const routes: Routes = [
  {
    path: 'v1',
    component: DashboadOneComponent
  },
  {
    path: 'v2',
    component: DashboardTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
