import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { LabComponent } from './lab.component';
import { LabComponentRoutingModule } from './lab-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LabComponentRoutingModule
  ],
  declarations: [LabComponent],
  entryComponents: [LabComponent]
})
export class LabModule {}
