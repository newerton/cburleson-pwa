import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogFilterComponent } from './blog-filter.component';

const routes: Routes = [
  {
    path: '',
    component: BlogFilterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogFilterComponentRoutingModule { }
