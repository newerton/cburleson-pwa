import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService, Item } from '../../services/blog.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  item: Item;

  constructor(private route: ActivatedRoute, public blogService: BlogService) {
    console.log('DetailComponent > contructor()');
  }

  ngOnInit() {
    console.log('DetailComponent > ngOnInit()');
  }

  ionViewWillEnter() {
    console.log('> DetailComponent > ionViewWillEnter()');
    // console.log('this.route.snapshot', this.route.snapshot);
    const itemSlug = this.route.snapshot.paramMap.get('slug');
    console.log('slug', itemSlug);
    // this.item = this.blogService.getItemBySlug(itemSlug);
  }

}
