import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from {{ name }}!</h1>
    <app-products></app-products>
      

  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
