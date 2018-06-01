import { Component, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-authoring',
  templateUrl: './authoring.component.html',
  styleUrls: ['./authoring.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthoringComponent implements OnInit {

  @ViewChild('editor') editor: QuillEditorComponent

  constructor() { }

  ngOnInit() {
    this.editor
      .onContentChanged
      .pipe(
        //wait .4s between keyups to emit current value
        //throw away all other values
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(data => {
        console.log('view child + directly subscription', data);
        console.log('HTML: ', data.html);
      });
  }

  setFocus($event) {
    $event.focus();
  }

}
