import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  // name of the city.
  location: string;
  // default latitude and longitude value for the map, Toronto.
  lat = 43.6532;
  lng = -79.3832;
  // To store the city's weather data.
  fiveDaysData: any;
  // to store the list of weather records of a city
  weatherlist = [];
  cityData: any;
  // for collapsing
  submitted = false;
  citySubmitted: any;

  constructor(private _weatherService: WeatherService) { }
  // fired whenever your component is initialised and called only once per component.
  ngOnInit() {
  }

  onSubmit() {
    // form vanishes on submission.
    this.submitted = true;
    // gets 5 days weather data of the city.
    this._weatherService.getforecastData(this.location)
                        .subscribe(res => {
                          console.log(res);
                          this.fiveDaysData = res;
                          this.weatherlist = this.fiveDaysData.list;
                          console.log(this.weatherlist);
                          this.cityData = this.fiveDaysData.city;
                          console.log(this.cityData);
                          console.log(this.fiveDaysData.city.id);
                        });
    this.citySubmitted = true;
  }
}
