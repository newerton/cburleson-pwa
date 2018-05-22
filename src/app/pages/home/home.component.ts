import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentYear: number;

  constructor( private titleService: Title ) { }

  ngOnInit() {
    // console.log('HomeComponent > ngOnInit()');
    this.setTitle('Cody Burleson');
    this.currentYear = new Date().getFullYear();
  }

  ionViewWillEnter() {
    // console.log('> HomeComponent > ionViewWillEnter()');
    // console.log('this.route.snapshot', this.route.snapshot);
    // For some reason, we need it here too...
    this.setTitle('Cody Burleson');
  }

  public setTitle( newTitle: string) {
    // console.log('HomeComponent > setTitle(): ', newTitle);
    this.titleService.setTitle( newTitle );
  }

}
