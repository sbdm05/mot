import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoverLetterCPage } from './cover-letter-c.page';

const routes: Routes = [
  {
    path: '',
    component: CoverLetterCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoverLetterCPageRoutingModule {}
