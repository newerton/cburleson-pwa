import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BlogService, Item} from '../../services/blog.service';
import { Title } from '@angular/platform-browser';
import {ModalController} from '@ionic/angular';
import {BlogFilterComponent} from '../blog-filter/blog-filter.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {

  items: Item[];

  constructor(
    public blogService: BlogService,
    private titleService: Title,
    public modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('> BlogComponent.ngOnInit()');
    this.setTitle('Blog - Cody Burleson');
  }

  ionViewWillEnter() {
    console.log('- BlogComponent.ionViewWillEnter()');
    this.blogService.load().subscribe((data: Item[]) => {
      this.items = data;
    });
    console.log('- BlogComponent.ionViewWillEnter() > items:%o', this.items);
  }

  ionViewDidLoad() {
    console.log('> BlogComponent.ionViewDidLoad()');
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  showFilter() {
    console.log('> BlogComponent > showFilter()');

    // const modal = this.modalCtrl.create('BlogFilterComponent');
    // modal.present();
    /*
    modal.onWillDismiss((data: any[]) => {
      if (data) {
        this.excludeTracks = data;
        this.updateSchedule();
      }
    });*/


  }

  async presentModal() {
    const modalController = document.querySelector('ion-modal-controller');
    await modalController.componentOnReady();
    const modalElement = await modalController.create({
      component: 'BlogFilterComponent'
    });
    modalElement.present();
  }

  toggleSearch() {
    console.log('> BlogComponent > toggleSearch()');
  }

}
