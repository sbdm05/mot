import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSubBlockPageRoutingModule } from './add-sub-block-routing.module';

import { AddSubBlockPage } from './add-sub-block.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSubBlockPageRoutingModule,
  ],
  declarations: [AddSubBlockPage],
  exports: [AddSubBlockPage],
})
export class AddSubBlockPageModule {}
