import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService, Item } from '../../services/blog.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
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

  constructor(private route: ActivatedRoute, public blogService: BlogService, private titleService: Title) {
    console.log('DetailComponent > contructor()');
  }

  ngOnInit() {
    // console.log('DetailComponent > ngOnInit()');
    const itemSlug = this.route.snapshot.paramMap.get('slug');
    this.item = this.blogService.getItemBySlug(itemSlug);
    this.buildFetchPath();

    // console.log('slug: ', itemSlug);
    this.setTitle(this.item.title + '- Cody Burleson');
  }

  ionViewWillEnter() {
    // console.log('> DetailComponent > ionViewWillEnter()');
    // console.log('this.route.snapshot', this.route.snapshot);
  }


  private setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  /**
   * Constructs the physical path by which the content file will be fetched,
   * which is a different path than the URL represented by the route.
   *
   * @param item
   */
  buildFetchPath() {
    const date = this.item.date;
    let path = '/assets/content/' +  date.replace(/-/g, '/') + '/' + this.item.slug;
    if ( this.item.format === 'text/markdown' ) {
      path += '.md';
    }
    this.fetchPath = path;
    console.log('- DetailComponent > buildFetchPath() > built: ', this.fetchPath);
  }

}
