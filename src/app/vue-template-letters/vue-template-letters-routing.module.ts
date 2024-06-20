import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VueTemplateLettersPage } from './vue-template-letters.page';

const routes: Routes = [
  {
    path: '',
    component: VueTemplateLettersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VueTemplateLettersPageRoutingModule {}
