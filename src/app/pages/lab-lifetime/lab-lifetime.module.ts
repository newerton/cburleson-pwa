import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { LabLifetimeComponent } from './lab-lifetime.component';
import { LabLifetimeComponentRoutingModule } from './lab-lifetime-routing.module';
import {FormBuilder} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LabLifetimeComponentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LabLifetimeComponent],
  entryComponents: [LabLifetimeComponent],
  providers: [FormBuilder],
})
export class LabLifetimeModule { }
