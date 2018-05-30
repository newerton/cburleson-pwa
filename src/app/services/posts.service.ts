import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Item} from './blog.service';


@Injectable()
export class PostsService {

  items: any[];

  constructor(private http: HttpClient) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/posts').map(this.processData, this);
  }


  // A place for post-processing, before making data available to the view.
  processData(data: any[]) {
    console.log('>> PostsService.processData(%o)', data);

    // Note: JSON is an assumed default and no longer needs to be explicitly parsed like this:
    // this.data = data.json();

    this.items = data;

    /*
    this.items.forEach((item: Item) => {
      // Items are not required to have an image, but we want want in the view. If the given
      // item has no image, give it the default thumbnail image.
      if ( !item.image ) {
        item.image = '/assets/img/thumbnail-blog-post.png';
        console.log(item.slug + ' has no image');
      }
    });
    */

    return this.items;

  }
}
