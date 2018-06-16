import { Component, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
// import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { BlogService, Item } from '../../services/blog.service';


import { Log } from 'ng2-logger/client';

const log = Log.create('AuthoringComponent');

// See: https://github.com/KillerCodeMonkey/ngx-quill-example

@Component({
  selector: 'app-authoring',
  templateUrl: './authoring.component.html',
  styleUrls: ['./authoring.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthoringComponent implements OnInit {

  // @ViewChild('editor') editor: QuillEditorComponent
  @ViewChild('myckeditor') ckeditor: any;

  item: Item;
  fetchPath: string;

  ckeConfig: any;
  ckeditorContent = '<p>Some html</p>';

  constructor(private route: ActivatedRoute,
              public blogService: BlogService,
              private http: HttpClient,
              private titleService: Title) { }

  ngOnInit() {

    this.ckeConfig = {
      allowedContent: true,
      extraPlugins: 'divarea',
      // uiColor: '#99000'
    };

    const itemSlug = this.route.snapshot.paramMap.get('slug');

    if (itemSlug) {
      log.d('- ngOnInit > Got slug', itemSlug);
      // this.ckeditorContent = '<p>Got slug: ' + itemSlug + '</p>';

      this.item = this.blogService.getItemBySlug(itemSlug);

      // console.log(this.item);

      this.fetchPath = this.blogService.buildFetchPath(this.item);

      if ( this.item.format === 'text/html' ) {
        // console.log('-- DetailComponent.ngOnInit > got HTML format: ', this.fetchPath);

        this.http.get(this.fetchPath, {responseType: 'text'}).subscribe(data => {
          this.ckeditorContent = data;
        });

      }

    } else {
      log.d('- ngOnInit > No slug to load');
    }

    this.setTitle('Authoring - Cody Burleson');

  }

  private setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }



  // Called after editor changed and after the debounce, so there's a pause
  // after you stop typing and then this is called.
  onChange($event) {
    log.d('> onChange', $event);
  }

  // Called EVERY time the editor is changed
  onEditorChange($event) {
    log.d('> onEditorChange', $event);
  }

  onReady($event) {
    log.d('> onReady', $event);
  }

  onFocus($event) {
    log.d('> onFocus', $event);
  }

  onBlur($event) {
   log.d('> onBlur', $event);
  }

  // triggered when you go from source to wysiwyg  html
  onContentDom($event) {
    log.d('> onContentDom', $event);
  }

  onFileUploadRequest($event) {
    log.d('> onFileUploadRequest', $event);
  }

}
