import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BlogService} from '../../services/blog.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {

  constructor(public blogService: BlogService,  private titleService: Title ) { }

  ngOnInit() {
    this.setTitle('Blog - Cody Burleson');
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  showFilter() {
    console.log('> BlogComponent > showFilter()');
  }

  toggleSearch() {
    console.log('> BlogComponent > toggleSearch()');
  }

}
