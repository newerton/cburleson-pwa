Angular provides a Title service that you can use to set the title of a page. This is good, of course, for SEO. Here's how to use it.


``` typescript
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
 
@Component({
    selector: 'my-app', 
    viewProviders: [Title], 
    template: `<h1>MyApp</h1>`
})
export class MyAppComponent {

    constructor(private titleService: Title) {}
 
    ngOnInit() {
        this.setTitle('My Web Page Title');
    }
 
    public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }
}
```

The service automatically creates the title element in the head if needed and also sets the value.  The service also has a getter method to get the title.
