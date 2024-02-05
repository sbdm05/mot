import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VueSettingsPage } from './vue-settings.page';

const routes: Routes = [
  {
    path: '',
    component: VueSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VueSettingsPageRoutingModule {}
