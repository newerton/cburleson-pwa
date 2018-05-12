# Routing

Create two components

ng g c Home
ng g c Data


in src/index.html, set the base element as first child of head as shown:

`<base href="/">`


In `src/app.module.ts`...

```
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: AppHomeComponent,
    data: { title: 'Home' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  ...
})

```

Put the matches in order in the forRoot list. So least specific paths last!

//localhost/path1/path2
//localhost/path1




In `app-nav.component.html`...


`<router-outlet></router-outlet>`


In other pages, like the menu...

`<a routerLink="/data">Go Data!</a>`


## Something I have not yet done...

An Angular best practice is to load and configure the router in a separate, top-level module that is dedicated to routing and imported by the root AppModule.

By convention, the module class name is `AppRoutingModule` and it belongs in the app-routing.module.ts in the `src/app` folder.

Use the CLI to generate it.

`ng generate module app-routing --flat --module=app`

- `flat` puts the file in src/app instead of its own folder.
- `module=app` tells the CLI to register it in the imports array of the AppModule.

You generally don't declare components in a routing module so you can delete the @NgModule.declarations array and delete CommonModule references too.

Left off here: 

https://angular.io/tutorial/toh-pt5
