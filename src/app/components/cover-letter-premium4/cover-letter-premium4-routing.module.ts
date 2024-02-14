import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoverLetterPremium4Page } from './cover-letter-premium4.page';

const routes: Routes = [
  {
    path: '',
    component: CoverLetterPremium4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoverLetterPremium4PageRoutingModule {}
