import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Products } from './app/products/products';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from {{ name }}!</h1>
    <app-products></app-products>
      

  `,
  standalone:true,
  imports:[Products]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
