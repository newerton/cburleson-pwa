import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService, Item } from '../../services/blog.service';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { Log } from 'ng2-logger/client';

const log = Log.create('DetailComponent');

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailComponent implements OnInit {

  item: Item;

  /**
   * Path for loading the raw file, which may be different than what shows up
   * in the URL as route param. For example, if we call blog/mojo, the actual
   * path for the file may be /assets/content/2018/12/22/mojo.md.
   */
  fetchPath: string;

  htmlBody: string;

  constructor(private route: ActivatedRoute,
              public blogService: BlogService,
              private titleService: Title,
              private http: HttpClient) {
    log.d('> constructor');
  }

  ngOnInit() {
    log.d('> ngOnInit');
    const itemSlug = this.route.snapshot.paramMap.get('slug');
    this.item = this.blogService.getItemBySlug(itemSlug);

    // this.buildFetchPath();
    this.fetchPath = this.blogService.buildFetchPath(this.item);

    if ( this.item.format === 'text/html' ) {
      this.http.get(this.fetchPath, {responseType: 'text'}).subscribe(data => {
        this.htmlBody = data;
      });
    }

    this.setTitle(this.item.title + ' - Cody Burleson');
  }

  // ionViewWillEnter() {
    // console.log('> DetailComponent > ionViewWillEnter()');
    // console.log('this.route.snapshot', this.route.snapshot);
  // }

  private setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

}
