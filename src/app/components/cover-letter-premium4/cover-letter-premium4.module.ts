import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoverLetterPremium4PageRoutingModule } from './cover-letter-premium4-routing.module';

import { CoverLetterPremium4Page } from './cover-letter-premium4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoverLetterPremium4PageRoutingModule
  ],
  declarations: [CoverLetterPremium4Page]
})
export class CoverLetterPremium4PageModule {}
