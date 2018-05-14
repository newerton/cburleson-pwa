# How to create a new main page

This procedure will guide you in the creation of a new main page that will show 
in the main menu and load by route when clicked.

## Step 1 - Generate the page component

`ng g c /pages/<name>`

## Step 2 - Remove references from app module

Remove all references to the newly created component from `src/app/app.module.ts`.

## Step 3 - Create page component's routing module

Create a new file in the component's directory called:

`<name>-routing.module.ts`

With the following contents (replace `<name>` and `<Name>` in appropriate places)

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { <Name>Component } from './<name>.component';

const routes: Routes = [
  {
    path: '',
    component: <Name>Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class <Name>ComponentRoutingModule { }

```

## Step 4 - Create a module for the page component


Create a new file in the component's directory called:

`<name>.module.ts`

With the following contents (replace `<name>` and `<Name>` in appropriate places)

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { <Name>Component } from './<name>.component';
import { <Name>ComponentRoutingModule } from './<name>-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    <Name>ComponentRoutingModule
  ],
  declarations: [<Name>Component],
  entryComponents: [<Name>Component]
})
export class <Name>Module {}
```

## Step 5 - Add route for the new page

In `app-routing.module.ts`, add a new route to the `routes` array. For example:

`{ path: 'blog', loadChildren: './pages/blog/blog.module#BlogModule' },`

## Step 6 - Add the route to the href in the menu

In `app.component.html`, add the menu item and link to the route. For example:

```
<ion-menu-toggle autoHide="false">
  <ion-item href="/blog">Blog</ion-item>
</ion-menu-toggle>
```

## Step 7 - Add the HTML for the view

In the <name>.component.html file, you will need some HTML to render, so dress it as appropriate.
For example:

```
<!-- <ion-header no-border> -->
<ion-header>
  <ion-toolbar color="primary">
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>Blog</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content no-bounce>
  <p>It works!</p>
</ion-content>

<ion-footer>
  <ion-toolbar color="primary">
    <ion-title>© {{ currentYear }} Cody Burleson. All rights reserved.</ion-title>
  </ion-toolbar>
</ion-footer>

```

