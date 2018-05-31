import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthoringComponent } from './authoring.component';

const routes: Routes = [
  {
    path: '',
    component: AuthoringComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthoringComponentRoutingModule { }

