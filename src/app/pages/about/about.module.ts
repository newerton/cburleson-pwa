import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AboutComponent } from './about.component';
import { AboutComponentRoutingModule } from './about-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AboutComponentRoutingModule
  ],
  declarations: [AboutComponent],
  entryComponents: [AboutComponent]
})
export class AboutModule {}
