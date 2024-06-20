import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VueSaveForDashboardPageRoutingModule } from './vue-save-for-dashboard-routing.module';

import { VueSaveForDashboardPage } from './vue-save-for-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VueSaveForDashboardPageRoutingModule
  ],
  declarations: [VueSaveForDashboardPage]
})
export class VueSaveForDashboardPageModule {}
