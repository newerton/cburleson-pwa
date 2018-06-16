import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { environment } from './../../environments/environment';

import { Log } from 'ng2-logger/client';

const log = Log.create('BlogService');
// if (environment.production) {
  // Log.setProductionMode();
// }

export interface Item {
  title: string;
  slug: string;
  description?: string;
  date: string;
  format?: string;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public items: Item[];

  constructor(public http: HttpClient) {
    log.d('> constructor');
  }

  load(): any {
    log.d('> load');
    if (this.items) {
      // The of operator accepts a number of items as parameters, and returns an Observable that emits each of
      // these parameters, in order, as its emitted sequence. In this case, we will only be returning this.items
      // to any subscriber.
      log.d('< load < returning previously fetched data', this.items);
      return Observable.of(this.items);
    } else {
      // http.get() creates an observable.
      // map() creates and returns its own new observable from the observable that http.get() created,
      // which we can then subscribe to. Therefore, we can subscribe to the result of this method.
      //
      // The Map operator applies a function of your choosing to each item emitted by the source Observable, and
      // returns an Observable that emits the results of these function applications.
      log.d('< load < returning data with new fetch');
      return this.http.get('assets/data/blog-data.json').map(this.processData, this);
    }
  }

  // A place for post-processing, before making data available to the view.
  processData(data: Item[]) {
    log.d('> processData', data);

    // Note: JSON is an assumed default and no longer needs to be explicitly parsed like this:
    // this.data = data.json();

    this.items = data;

    this.items.forEach((item: Item) => {
      // Items are not required to have an image, but we want want in the view. If the given
      // item has no image, give it the default thumbnail image.
      if ( !item.image ) {
        item.image = '/assets/img/thumbnail-blog-post.png';
        log.d('- processData > item has no image', item.slug);
      }
    });

    return this.items;

  }

  getItemBySlug(slug): Item {
    log.d('> getItemBySlug', slug);
    return this.items.find(item => item.slug === slug);
  }

  /**
   * Constructs the physical path by which the content file will be fetched,
   * which is a different path than the URL represented by the route.
   *
   * @param item
   */
  buildFetchPath(item: Item) {
    const date = item.date;
    let path = '/assets/content/' +  date.replace(/-/g, '/') + '/' + item.slug;
    if ( item.format === 'text/markdown' ) {
      path += '.md';
    } else if ( item.format === 'text/html' ) {
      path += '.html';
    }
    return path;
  }

}
