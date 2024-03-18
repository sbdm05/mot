import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSubBlockPage } from './add-sub-block.page';

const routes: Routes = [
  {
    path: '',
    component: AddSubBlockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSubBlockPageRoutingModule {}
