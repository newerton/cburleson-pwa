import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService, Item } from '../../services/blog.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  item: Item;

  constructor(private route: ActivatedRoute, public blogService: BlogService, private titleService: Title) {
    console.log('DetailComponent > contructor()');
  }

  ngOnInit() {
    // console.log('DetailComponent > ngOnInit()');
    const itemSlug = this.route.snapshot.paramMap.get('slug');
    this.item = this.blogService.getItemBySlug(itemSlug);
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

}
