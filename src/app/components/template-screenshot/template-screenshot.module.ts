import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplateScreenshotPageRoutingModule } from './template-screenshot-routing.module';

import { TemplateScreenshotPage } from './template-screenshot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemplateScreenshotPageRoutingModule
  ],
  declarations: [TemplateScreenshotPage]
})
export class TemplateScreenshotPageModule {}
