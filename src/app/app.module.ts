import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { WeatherService } from './weather.service';
import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ForecastComponent } from './forecast/forecast.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    ForecastComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    // calling root to configure the agmcoremodule
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAuNre_l4nGqY4gP9SeQD-PyGbfuBzB168'
    })
  ],
  // the service provided here is avialable to all the components related to this module class
  // its called sphared service space concept of Angular
  providers: [WeatherService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
