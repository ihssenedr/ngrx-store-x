import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class="app">
    <div class="app__header">
      <img src="/assets/img/logo.png" class="app__logo" >
    </div>
    <div>
      <div class="app__nav">
        <h1 class="uk-heading-small uk-margin-left">Shop</h1>
      </div>
        <router-outlet></router-outlet>
      <div class="app__footer uk-margin">
        <p>&copy; Ultimate Pizza Inc.</p>
      </div>
    </div>
  </div>
  `,
})
export class AppComponent {}
