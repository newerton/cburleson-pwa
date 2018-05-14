import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LabLifetimeComponent } from './lab-lifetime.component';

const routes: Routes = [
  {
    path: '',
    component: LabLifetimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabLifetimeComponentRoutingModule { }
