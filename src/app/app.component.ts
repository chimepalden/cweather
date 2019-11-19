import { Component } from '@angular/core';
import { Author } from './address-card/author.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cWeather';

  routes = [
    {linkName: 'Home', url: 'home'},
    {linkName: '5 Days', url: 'forecast'},
    {linkName: 'Login', url: 'login'},
    {linkName: 'Register', url: 'register'},
    {linkName: 'Logout', url: 'logout'}
  ];
  constructor() {}
  /*author: Author;
  constructor() {
    this.author = new Author();
    this.author.name = 'Chime';
    this.author.designation = 'Software Developer';
    this.author.address = '1234, dfadfa, Toronto';
    this.author.phone = [
      '12333413414',
      '31241324131'
    ];
  }*/
}
