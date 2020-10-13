import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cWeather';

  constructor(public _authService: AuthService) {}

  ngOnInit() {}

  /*routes = [
    {linkName: 'Home', url: 'home'},
    {linkName: '5 Days', url: 'forecast'},
    {linkName: 'Login', url: 'login'},
    {linkName: 'Register', url: 'register'}
  ];*/

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
