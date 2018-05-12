# Data binding

Source to target => `[]` - get information from the TypeScript file into the view
Target to source => `()` - get information from view into the TypeScript file


`<input type="text" value="{{myvariable}}"/>`

`<input type="text" [value]="myvariable"/>`

`<button (click)="callMyFunction()">Hey there</button>`

## Two way data binding

```
<input type="text" [value]="text" (input)="updateValue($event)">
{{text}}
```

```
updateValue(e) {
this.text = e.target.value;
  console.log(e.target.value);
}
```

OR...

app.component.ts

```
import { FormsModule } from '@angular/forms'

imports: [
  BrowserModule,
  FormsModule
]
```

`<input type="text" [(ngModel)]="text">`
