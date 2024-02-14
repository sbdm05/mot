import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoverLetterPremium2Page } from './cover-letter-premium2.page';

const routes: Routes = [
  {
    path: '',
    component: CoverLetterPremium2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoverLetterPremium2PageRoutingModule {}
