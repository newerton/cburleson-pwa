import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AuthoringComponent } from './authoring.component';
import { AuthoringComponentRoutingModule } from './authoring-routing.module';
// import { QuillModule } from 'ngx-quill'
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AuthoringComponentRoutingModule,
    // QuillModule
    FormsModule,
    CKEditorModule
  ],
  declarations: [AuthoringComponent],
  entryComponents: [AuthoringComponent]
})
export class AuthoringModule {}

