import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateInfo: string;
  // async update of the current date and time
  constructor() {
    setInterval(() => {
      const currentDate = new Date();
      this.dateInfo = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    }, 1000);
  }

  ngOnInit() {
  }

}
