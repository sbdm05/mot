import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VueSaveForDashboardPage } from './vue-save-for-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: VueSaveForDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VueSaveForDashboardPageRoutingModule {}
