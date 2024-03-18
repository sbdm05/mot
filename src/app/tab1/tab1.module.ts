import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { FormPageModule } from '../form/form.module';
import { AddSubBlockPage } from '../components/add-sub-block/add-sub-block.page';
import { AddSubBlockPageModule } from '../components/add-sub-block/add-sub-block.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    FormPageModule,
    AddSubBlockPageModule,
  ],
  declarations: [Tab1Page],
})
export class Tab1PageModule {}
