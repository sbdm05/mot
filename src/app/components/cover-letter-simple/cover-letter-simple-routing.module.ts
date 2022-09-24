import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoverLetterSimplePage } from './cover-letter-simple.page';

const routes: Routes = [
  {
    path: '',
    component: CoverLetterSimplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoverLetterSimplePageRoutingModule {}
