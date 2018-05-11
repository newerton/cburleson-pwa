# How I built this app

##Prerequisites:

Both the Angular CLI and generated project have dependencies that require Node 6.9.0 or higher, together with NPM 3 or higher.

## Install the Angular cli

Install the Angular CLI globally with the following command.

`npm install -g @angular/cli`

## Generate and serve an Angular project via a development server

```
ng new cburleson-pwa
cd cburleson-pwa
ng serve
```

![Image of rendered web page](img/new-ng-project.jpg)

The Angular CLI already establishes this new project as a Git repository, so you do not also need to run `git init`. The CLI also performs an initial commit, so you've got a clean baseline to roll back to if needed.

Verify that you have the latest version of Angular in your `package.json` file. With my version of the CLI, everything generated for 6.0.0, yet there was already available 6.0.1, so I changed all of the angular packages to 6.0.1 as show below. I also updated the version number on several other dependencies, which I knew to have newer versions. Here's a look at my dependencies after these changes.

**package.json**

```  
  "dependencies": {
    "@angular/animations": "^6.0.1",
    "@angular/common": "^6.0.1",
    "@angular/compiler": "^6.0.1",
    "@angular/core": "^6.0.1",
    "@angular/forms": "^6.0.1",
    "@angular/http": "^6.0.1",
    "@angular/platform-browser": "^6.0.1",
    "@angular/platform-browser-dynamic": "^6.0.1",
    "@angular/router": "^6.0.1",
    "core-js": "^2.5.4",
    "rxjs": "^6.0.0",
    "zone.js": "^0.8.26"
  },
  "devDependencies": {
    "@angular/compiler-cli": "^6.0.1",
    "@angular-devkit/build-angular": "~0.6.1",
    "typescript": "~2.7.2",
    "@angular/cli": "~6.0.1",
    "@angular/language-service": "^6.0.1",
    "@types/jasmine": "~2.8.7",
    "@types/jasminewd2": "~2.0.3",
    "@types/node": "~8.9.4",
    "codelyzer": "~4.3.0",
    "jasmine-core": "~3.1.0",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~1.7.1",
    "karma-chrome-launcher": "~2.2.0",
    "karma-coverage-istanbul-reporter": "~1.4.2",
    "karma-jasmine": "~1.1.2",
    "karma-jasmine-html-reporter": "^1.1.0",
    "protractor": "~5.3.2",
    "ts-node": "~6.0.3",
    "tslint": "~5.10.0"
  }
```

If you want to be sure of a clean install of dependencies, you can delete the `node_modules/` directory at any time and the run `npm install` or `npm i` for short. Generally, however, all you need to do is run `npm i` again after making changes to `package.json`.

It's a good practice to run and spot-check your app any time you make dependency changes. You can do that with the following command:

`ng serve --open`

For me, everything checked out, so I did a commit against this new stable check-point:

**Commit** - Upgrade package dependencies

## Keep a dev log

One thing I like to do with new projects is keep notes and maintain a list of references. I do this using markdown files to create something like a little mini-wiki inside the project. It's helpful to myself and could potentially be helpful to other developers in the future. This step is optional, of course, but I highly recommend the practice.

In the project root, create a `docs/` directory. You can create subdirectories if desired (e.g. `devlog/`). This is where you can keep notes, references, and further documentation than what you'd normally include in the project's `README.md` file.

With that out of the way, let's get to building!


## Install ionic dependencies

`npm i @ionic/angular @ionic/cli-hooks @ionic/schematics-angular --save`

Install ionic tslint rules with the following command:

`npm i tslint-ionic-rules --save-dev`

Extend the rules from your `tslint.json` file.

Add this just above your rules section in `tslint.json`:

`"extends": "tslint-ionic-rules"`

For example:

```
 "extends": "tslint-ionic-rules",
  "rules": {
```

## Modify angular.json file

Next, we need to make a couple of changes to the `angular.json` file.

For one thing, just as a preferred convention, I'd like all the build output for production to go 
directly into a `www/` directory instead of a `dist/` directory.

In `angular.json`, change from this:

`"outputPath": "dist/cburleson-pwa",`

to this:

`"outputPath": "www",`

We also want to copy everything in the assets folder during the build and not just a couple of specific files.
Additionally, we need to copy the ionic assets from the `node_modules/` directory into the project.

Change the `assets` stanza from this:

```
"assets": [
  "src/favicon.ico",
  "src/assets"
],
```

to this:

```
"assets": [
  {
    "glob": "**/*",
    "input": "src/assets",
    "output": "assets"
  },
  {
    "glob": "**/*",
    "input": "node_modules/@ionic/angular/dist/ionic",
    "output": "./ionic"
  }
],
```

## Setup an Ionic split pane menu layout

At this point, we should be able to get some ionic components rendering in the web browser. Let's give it a try.

Replace everything in `src/app/app.component.html` with the following:

```
<ion-app>
  <ion-split-pane>
    <ion-menu>
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-menu-toggle autoHide="false">
            <ion-item href="#">Home</ion-item>
          </ion-menu-toggle>
          <ion-menu-toggle autoHide="false">
            <ion-item href="#">Blog</ion-item>
          </ion-menu-toggle>
          <ion-menu-toggle autoHide="false">
            <ion-item href="#">About</ion-item>
          </ion-menu-toggle>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-nav main></ion-nav>
  </ion-split-pane>
</ion-app>

```

Next, edit `src/app.module.ts` and import the `IonicModule` as shown below.

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

You should now be able to serve the app with the following command.

`ng serve --open`

You should see the following result. Note that the `ion-split-pane` will be hidden if your browser window size it too 
small, so if you don't see it, just expand the size of your browser window.

![Image of rendered ionic split pane](img/ion-split-pane.jpg)

That's a little preview of where we're going with this, but let's back up for a bit before we really start working 
with the split pane.

In `src/app.component.html`, comment out the whole split-pane stanza and put the following instead.

```
<ion-app>
  <ion-router-outlet main></ion-router-outlet>
</ion-app>
```
Your `src/app.component.html` file should now look like this:

```
<!--
<ion-app>
  <ion-split-pane>
    <ion-menu>
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-menu-toggle autoHide="false">
            <ion-item href="#">Home</ion-item>
          </ion-menu-toggle>
          <ion-menu-toggle autoHide="false">
            <ion-item href="#">Blog</ion-item>
          </ion-menu-toggle>
          <ion-menu-toggle autoHide="false">
            <ion-item href="#">About</ion-item>
          </ion-menu-toggle>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-nav main></ion-nav>
  </ion-split-pane>
</ion-app>
-->

<ion-app>
  <ion-router-outlet main></ion-router-outlet>
</ion-app>

```

Nothing will render in your browser now and you'll have an error like this in your JavaScript console:

```
ERROR Error: StaticInjectorError(AppModule)[IonRouterOutlet -> ChildrenOutletContexts]: 

```

We'll fix that up right quick.

## Create a routing module for the app

In the sr/app/ directory, create a file named `app-routing.module.ts` with the following contents:

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

TO DO: CHANGE ABOVE TO HAVE ACTUAL USED PATH TO HOME


In `src/app.component.ts`, we now need to import the `AppRoutingModule` and add it to the imports section of the @NgModule as shown:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';

import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

In the JavaScript console, our error changes. Now it says this:

```
ERROR Error: Uncaught (in promise): Error: Cannot find module "./pages/home/home.module".
```

We'll use the `ng generate` command to stub out a new component for our home page. A path is given so that the 
component is generated within a pages sub-directory.

`ng generate component /pages/home`

So, now we should have the following files:

- src/
  - app/
    - pages/
      - home/
        - home.component.css
        - home.component.html
        - home.component.spec.ts
        - home.component.ts


Edit `home.component.ts` to be as follows. We'll use the year field for rendering a copyright statement.

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentYear: number;

  constructor() { }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }

}
```

Edit `home.component.html` to be this:

```
<ion-header no-border>
  <ion-toolbar color='primary'>
    <ion-title>Home</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content no-bounce>
  <p>It works!</p>
</ion-content>

<ion-footer>
  <ion-toolbar color="primary">
    <ion-title>© {{ currentYear }} Cody Burleson. All rights reserved.</ion-title>
    <!--
    <ion-buttons slot="end">
      <div class="github-button"><iframe allowtransparency="true" scrolling="no" frameborder="0" src="https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fabritopach%2Fangular-ionic-master-detail&amp;title=&amp;aria-label=Star%20abritopach%2Fangular-ionic-master-detail%20on%20GitHub&amp;data-icon=octicon-star&amp;data-text=Star" style="width: 50px; height: 20px; border: none;"></iframe></div>
      <div class="github-button"><iframe allowtransparency="true" scrolling="no" frameborder="0" src="https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fabritopach&amp;title=&amp;aria-label=Follow%20%40abritopach%20on%20GitHub&amp;data-text=GitHub" style="width: 67px; height: 20px; border: none;"></iframe></div>
    </ion-buttons>
    -->
  </ion-toolbar>
</ion-footer>
```

Create a new file in `src/pages/home` called `home-routing.module.ts` with the following contents:

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeComponentRoutingModule { }

```

Create a new file in `src/pages/home` called `home.module.ts` with the following contents:

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HomeComponent } from './home.component';
import { HomeComponentRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomeComponentRoutingModule
  ],
  declarations: [HomeComponent],
  entryComponents: [HomeComponent]
})
export class HomeModule {}
```

Now take the HomeComponent references out of src/app.module.ts if any are there. They would likely have been added 
when we created the component using ng generate. It is very important that you remove them or there will be 
errors.

At this point, the Home page should render in the browser as shown:

![Image of rendered home page](img/home-page-1.jpg)

It's a good time to commit the code on this stable checkpoint.

**Commit** Add router and Home page
