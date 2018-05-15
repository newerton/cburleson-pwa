# Create a new page in Ionic PWA / Stencil project

One time only. Install the st-cc tool with `npm install -g st-cc`

- Execute `st-cc` to stub out the component.
  - What is the name of the component you want to create? `app-glass`
  - Is shadow component? (y/N) `N`
  - What type of style file? (Use arrow keys) `scss`
  - Create test file (Y/n) `Y`
  - `Stencil component app-glass created!`
- If the page is a main page that should have a menu icon, replace the render function with...

```
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-menu-button />
          </ion-buttons>
          <ion-title>Glass Web Components</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <p>
          This is your new page.
        </p>
      </ion-content>
    ];
  }
```

- If the page is a sub-page that needs a back-button, the render function needs to be like this (with a back button)...

```
render() {
  return [
    <ion-header>
      <ion-toolbar color='primary'>
        <ion-buttons slot="start">
          <ion-back-button defaultHref='/'></ion-back-button>
        </ion-buttons>

        <ion-title>Ionic PWA Toolkit</ion-title>
      </ion-toolbar>
    </ion-header>,
    <ion-content>
      <p>
        This is your new page.
      </p>
    </ion-content>
  ];
}
```



- Remove the @Props and Prop import...

```
 @Prop() first: string;
 @Prop() last: string;
```

- Remove the Prop testing part of the `spec.tsx` file...

```
it('should work with both the first and the last name', async () => {
      element.first = 'Peter';
      element.last = 'Parker';
      await window.flush();
      expect(element.textContent).toEqual('Hello, my name is Peter Parker');
});
```

- In src/components/my-app/my-app.tsx, add a route entry to the router

```
  renderRouter() {
    console.log("render router");
    return (
        <ion-router useHash={false}>
          <ion-route url='/' component='app-home'></ion-route>
          <ion-route url='/profile/:name' component='app-profile'></ion-route>
        </ion-router>
    );
  }
```

- If the page is a main page that needs to show in the main menu, in the return function of the same file, 
add an ion-menu-toggle item to put it on the menu...

```
   return (
      <ion-app>
        {this.renderRouter()}
        <ion-split-pane>
          <ion-menu>
            <ion-header>
              <ion-toolbar>
                <ion-title>Menu</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content>
              <ion-list>
                <ion-menu-toggle autoHide={false}>
                  <ion-item href="/">Home</ion-item>
                </ion-menu-toggle>
                <ion-menu-toggle autoHide={false}>
                  <ion-item href="/profile/cody">Profile</ion-item>
                </ion-menu-toggle>
                {/* <ion-item>Log Out</ion-item> */}
              </ion-list>
            </ion-content>
          </ion-menu>
          <ion-nav main />
        </ion-split-pane>
      </ion-app>
    );
```

For example, you would insert...

```
<ion-menu-toggle autoHide={false}>
  <ion-item href="/glass-web-components">Glass Web Components</ion-item>
</ion-menu-toggle>
```

in the scss file for the page, add ion-scroll padding as shown below...

```
app-glass {
  ion-scroll {
    padding: 15px;
  }
}
``