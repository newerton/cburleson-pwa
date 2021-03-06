# cburleson-pwa

This project is my experimental lab project for learning about Progressive Web Apps (PWAs), Angular 6, 
Ionic 4, and potentially also Capacitor.

A big shout goes out to Adrián Brito Pacheco, whose [angular-ionic-master-detail](https://github.com/abritopach/angular-ionic-master-detail) project was a big help in guiding me this far.

Right now, the goal of this project is to make a blog that renders content from flat markdown files. Later I want to then 
hook it up to [Carbon LDP](https://carbonldp.com).

The generated result from this project can currently be viewed at:

**[cburleson02.firebaseapp.com](https://cburleson02.firebaseapp.com/home)**

(Please keep in mind, however, that some things do not work as they should when served as github pages; that is only 
mean to provide a general preview.)

![Rendered example from the project](screenshot-for-readme.jpg)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

If you're interested in how I built this app from the very beginning, see all the `docs/devlog-x.md files`

## Developer prerequisites

- `npm install -g @angular/cli` for Angular CLI
- `npm install -g firebase-tools` for Firebase tools

## Usage

Tasks                    | Description
-------------------------|---------------------------------------------------------------------------------------------------------------
npm i                    | Install everything needed
ng serve                 | Start the app in development mode without launching browser; navigate to `http://localhost:4200/`
npm start                | Start the app in development mode and launch browser.
npm run test             | Run unit tests with karma and jasmine
npm run e2e              | Run end to end tests
npm run build            | Build the app for production (then run `python -m SimpleHTTPServer 8000` on `dist/pwa` to test)
npm run lint             | Run the linter (tslint)
npm run docker           | Build the docker image and run the container (experimental)
npm run deploy           | Deploy to prod server
node server.js           | Run the node express web server (always  `npm run build` first)
npm run express          | Run the PROD build, then the node express web server

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## TO DO

- [ ] Fix blog service so things load by direct URL (not jjust navigating)
- [ ] Make SEO friendly; see: https://blog.pusher.com/make-angular-4-app-seo-friendly/
- [ ] Add all content from existing wiki
- [ ] Add blog filter to filter by topic
- [ ] Add search
- [ ] Consider building Google Analytics web component
- [ ] Add the Lifetime Calendar (modified for better mobile experience)
- [ ] Systemetize tagging the docker container and publishing it
- [ ] After getting served on my own server, test all the PWA stuff (adding to home screen, etc.)
- [ ] Integrate [Carbon LDP](https://carbonldp.com)
- [ ] Experiment with Capacitor
- [ ] Experiment with Electron
- [ ] Experiment with Web Components built from the Stencil compiler
- [ ] Experiment with test framework and add tests
- [ ] Change ico (and app icons)
- [ ] Script update package.json version as well as a version no. that can display on screen
- [ ] Consider node web app for running RESTful web services and more robust server-side than just static files

