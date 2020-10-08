import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private _currentWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private _forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  private _fivedaysUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?id=';
  private _apiKey = '9391c234f787ac1447cd71d7432aa3f6';

  cityData: any;
  cityID: any;

  // Dependency injection of HttpClient service
  constructor(private _http: HttpClient) { }

  // returns the current weather of the city
  getWeatherData(city: any) {
    return this._http.get(this._currentWeatherUrl + city + '&APPID=' + this._apiKey + '&units=metric')
                     .pipe(map(data => {
                            return data;
                            }),
                          // sometimes error could be network interruption and trying again may solve the problem
                          retry(3),
                          // handling error
                          catchError(error => {
                            return throwError(error.message || 'Server Error!');
                            })
                          );
  }

  // returns demo 5 days weather forecast of the city with city's name
  getforecastData(city: any) {
    return this._http.get(this._forecastUrl + city + '&APPID=' + this._apiKey + '&units=metric&cnt=5')
    .pipe(map(data => {
             return data;
           }),
         retry(3),
         catchError(error => {
           return throwError(error.message || 'Server Error!');
           })
         );
  }

  // returns 5 days weather forecast of the city with city's id
  // need authorization for data access.
  get5daysWeatherData(city: any) {
    this._http.get(this._currentWeatherUrl + city + '&APPID=' + this._apiKey + '&units=metric')
    .pipe(map(data => {
            this.cityData = data;
            return this.cityID = this.cityData.city.id;
           }),
         // sometimes error could be network interruption and trying again may solve the problem
         retry(3),
         // handling error
         catchError(error => {
           return throwError(error.message || 'Server Error!');
           })
         );
    return this._http.get(this._fivedaysUrl + this.cityID + '&APPID=' + this._apiKey + '&units=metric&cnt=5')
                     .pipe(map(data => {
                              return data;
                            }),
                          retry(3),
                          catchError(error => {
                            return throwError(error.message || 'Server Error!');
                            })
                          );
  }
}

