import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoverLetterCPageRoutingModule } from './cover-letter-c-routing.module';

import { CoverLetterCPage } from './cover-letter-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoverLetterCPageRoutingModule
  ],
  declarations: [CoverLetterCPage]
})
export class CoverLetterCPageModule {}
