import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<div><h1>{{pageTitle}}</h1></div>
  <pm-products></pm-products>`

  //templateUrl: './app.component.html',
  ///styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product';
}
