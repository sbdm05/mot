import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoverLetterPremium1Page } from './cover-letter-premium1.page';

const routes: Routes = [
  {
    path: '',
    component: CoverLetterPremium1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoverLetterPremium1PageRoutingModule {}
