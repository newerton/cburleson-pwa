import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AuthoringComponent } from './authoring.component';
import { AuthoringComponentRoutingModule } from './authoring-routing.module';
// import { QuillModule } from 'ngx-quill'

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AuthoringComponentRoutingModule,
    // QuillModule
  ],
  declarations: [AuthoringComponent],
  entryComponents: [AuthoringComponent]
})
export class AuthoringModule {}

