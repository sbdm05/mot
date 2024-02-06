import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoverLetterPremium1PageRoutingModule } from './cover-letter-premium1-routing.module';

import { CoverLetterPremium1Page } from './cover-letter-premium1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoverLetterPremium1PageRoutingModule
  ],
  declarations: [CoverLetterPremium1Page]
})
export class CoverLetterPremium1PageModule {}
