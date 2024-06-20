import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VueTemplateLettersPageRoutingModule } from './vue-template-letters-routing.module';

import { VueTemplateLettersPage } from './vue-template-letters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VueTemplateLettersPageRoutingModule
  ],
  declarations: [VueTemplateLettersPage]
})
export class VueTemplateLettersPageModule {}
