import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-filter',
  templateUrl: './blog-filter.component.html',
  styleUrls: ['./blog-filter.component.css']
})
export class BlogFilterComponent implements OnInit {

  constructor() {
    console.log('> BlogFilterComponent > constructor()');
  }

  ngOnInit() {
  }

}