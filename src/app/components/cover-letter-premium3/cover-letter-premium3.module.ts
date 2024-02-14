import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoverLetterPremium3PageRoutingModule } from './cover-letter-premium3-routing.module';

import { CoverLetterPremium3Page } from './cover-letter-premium3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoverLetterPremium3PageRoutingModule
  ],
  declarations: [CoverLetterPremium3Page]
})
export class CoverLetterPremium3PageModule {}
