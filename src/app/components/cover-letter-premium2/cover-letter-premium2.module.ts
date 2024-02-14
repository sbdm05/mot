import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoverLetterPremium2PageRoutingModule } from './cover-letter-premium2-routing.module';

import { CoverLetterPremium2Page } from './cover-letter-premium2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoverLetterPremium2PageRoutingModule
  ],
  declarations: [CoverLetterPremium2Page]
})
export class CoverLetterPremium2PageModule {}
