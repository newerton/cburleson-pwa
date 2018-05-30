import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PostsComponent } from './posts.component';
import { PostsComponentRoutingModule } from './posts-routing.module';

import { PostsService } from '../../services/posts.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PostsComponentRoutingModule
  ],
  providers: [PostsService],
  declarations: [PostsComponent],
  entryComponents: [PostsComponent]
})
export class PostsModule {}
