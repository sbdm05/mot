import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoverLetterSimplePageRoutingModule } from './cover-letter-simple-routing.module';

import { CoverLetterSimplePage } from './cover-letter-simple.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoverLetterSimplePageRoutingModule
  ],
  declarations: [CoverLetterSimplePage]
})
export class CoverLetterSimplePageModule {}
