import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { BlogComponent } from './blog.component';
import { BlogComponentRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    BlogComponentRoutingModule,
  ],
  declarations: [BlogComponent],
  entryComponents: [BlogComponent]
})
export class BlogModule {}
