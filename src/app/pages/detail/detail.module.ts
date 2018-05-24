import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DetailComponent } from './detail.component';
import { DetailComponentRoutingModule } from './detail-routing.module';

import { MarkdownModule } from '../../../markdown/markdown.module';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DetailComponentRoutingModule,
    MarkdownModule.forRoot(),
    HttpClientModule
  ],
  declarations: [DetailComponent],
  entryComponents: [DetailComponent]
})
export class DetailModule {}
