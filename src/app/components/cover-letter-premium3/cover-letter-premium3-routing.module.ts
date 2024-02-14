import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoverLetterPremium3Page } from './cover-letter-premium3.page';

const routes: Routes = [
  {
    path: '',
    component: CoverLetterPremium3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoverLetterPremium3PageRoutingModule {}
