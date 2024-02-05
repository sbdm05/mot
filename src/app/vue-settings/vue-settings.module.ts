import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VueSettingsPageRoutingModule } from './vue-settings-routing.module';

import { VueSettingsPage } from './vue-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VueSettingsPageRoutingModule
  ],
  declarations: [VueSettingsPage]
})
export class VueSettingsPageModule {}
