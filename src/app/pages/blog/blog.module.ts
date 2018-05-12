import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MomentModule } from 'ngx-moment';

import { BlogComponent } from './blog.component';
import { BlogComponentRoutingModule } from './blog-routing.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    BlogComponentRoutingModule,
    MomentModule
  ],
  declarations: [BlogComponent],
  entryComponents: [BlogComponent]
})
export class BlogModule {}
