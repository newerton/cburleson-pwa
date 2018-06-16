import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BlogService, Item} from '../../services/blog.service';
import { Title } from '@angular/platform-browser';
import {ModalController} from '@ionic/angular';
import { Log } from 'ng2-logger/client';

const log = Log.create('BlogComponent');

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
    log.d('> ngOnInit');
    this.setTitle('Blog - Cody Burleson');
  }

  ionViewWillEnter() {
    log.d('> ionViewWillEnter');
    this.blogService.load().subscribe((data: Item[]) => {
      this.items = data;
    });
    log.d('- ionViewWillEnter > items', this.items);
  }

  ionViewDidLoad() {
    log.d('> ionViewDidLoad');
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
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
   log.d('toggleSearch');
  }

}
