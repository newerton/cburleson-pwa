import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { BlogFilterComponent } from './blog-filter.component';
import { BlogFilterComponentRoutingModule } from './blog-filter-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    BlogFilterComponentRoutingModule
  ],
  declarations: [BlogFilterComponent],
  entryComponents: [BlogFilterComponent]
})
export class BlogFilterModule {


  dismiss() {

  }

  applyFilters() {

  }


}
