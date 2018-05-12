import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';

import {AppRoutingModule} from './app-routing.module';
import {BlogService} from './services/blog.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    IonicModule.forRoot()
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
