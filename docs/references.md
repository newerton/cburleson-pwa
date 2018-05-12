# References

A variety of links to material I've referenced for one reason or another during the creation of this project.

## Angular General

- [Angular Material](https://material.angular.io/) - Material Design components for Angular
- [Angular Material 2 Quick Reference](https://alligator.io/angular/material-design-angular-reference/)
- [angular/flex-layout](https://github.com/angular/flex-layout)
- [Quick start with Angular Material and Flex-Layout](https://medium.com/letsboot/quick-start-with-angular-material-and-flex-layout-1b065aa1476c)
- [Flex Layout API Documentation](https://github.com/angular/flex-layout/wiki/API-Documentation#containers)
- [ngx-md (Previously Angular 2 Markdown)](https://www.npmjs.com/package/ngx-md)

### Angular CLI

- [Angular CLI](https://github.com/angular/angular-cli)

### Angular Directives

- [Angular 6 Tutorial 29: Directives](https://www.youtube.com/watch?v=7j9XrolKPwQ)
- [Angular 6 Tutorial 30: Custom Directives](https://www.youtube.com/watch?v=lxts9If94xA)

### Angular Pipes

- [Angular 6 Tutorial 27: Pipes](https://www.youtube.com/watch?v=2ZBEwsXyk3M) - format output
- [Angular 6 Tutorial 28: Custom Pipes](https://www.youtube.com/watch?v=TFusNXuk5UI)



### Angular HTTP
- [Angular 6 Tutorial 12: HTTP Requests](https://www.youtube.com/watch?v=fh2GyYQcuxU)
- [Angular 6 Tutorial 13: Configure Proxy for API calls](https://www.youtube.com/watch?v=z1MUmTjYKH8)

### Angular Routing
- [Routing](https://www.youtube.com/watch?v=lHJM_tuDbwU)

- [Angular 6 Tutorial 21: MongoDB + Angular + Node Registration](https://www.youtube.com/watch?v=HTG6T4BrmTM)
- [Angular 6 Tutorial 22: NodeJS Setup (Registration Part 2)](https://www.youtube.com/watch?v=iG0ZzaU31M8)
- [Angular 6 Tutorial 23: MongoDB Setup (Registration Part 3)](https://www.youtube.com/watch?v=Xn44rgzdzw4)
- [Angular 6 Tutorial 24: Linking MongoDB with Angular (Registration Part 4](https://www.youtube.com/watch?v=mlgk-LMCiVw)
- [Angular 6 Tutorial 25: Sessions in Node](https://www.youtube.com/watch?v=5OaeLPlm0yg)

### Angular Login app

- [Login App - Part 1](https://www.youtube.com/watch?v=rajjv-0bSps)
- [Login App - Part 2](https://www.youtube.com/watch?v=BKzyDg-Ll18)
- [Login App - Part 3 - Route Protection](https://www.youtube.com/watch?v=k3_6a7anWBQ)
- [Login App - Part 4 - Setting up backend](https://www.youtube.com/watch?v=X5n353jld6o)
- [Login App - Part 5 - Persistent Login Session](https://www.youtube.com/watch?v=cPNTKy1Lq9s)
- [Adding Logout feature and UI (Login App Part 6)](https://www.youtube.com/watch?v=QLnp16KDXss)

### Angular and Redux

(NGXS may be an alternative for state management that some people say is simpler; not sure if its 
an alternative for Redux though - or something else entirely)

Take a look at the Redux devtools plugin for Chrome.

- [Angular 6 Tutorial 31: Redux - Introduction](https://www.youtube.com/watch?v=UUEO3oOnJa0)
- [Angular 6 Tutorial 32: Redux - Getting Started](https://www.youtube.com/watch?v=9hQv9EuF56Q)
- [Angular 6 Tutorial 33: Creating a Reducer](https://www.youtube.com/watch?v=dvz7UIX-4Xw)
- [Angular 6 Tutorial 34: Registering a reduce](https://www.youtube.com/watch?v=XPfz4gi3Sjk)
- [Angular 6 Tutorial 35: Getting Data from Redux Store](https://www.youtube.com/watch?v=1hlXlsaMeTs)

Helps manage how data or state of your application is flowing from one view to another. If 
you add redux to simple apps, it will only complicate them. The redux store is a data 
store (instead of storing data in each component) and each other component can fetch 
data from the store. Usefule when:

- One componnet needs to access data of another component
- One component needs to update another component
- Data needs to be in sync across various views

