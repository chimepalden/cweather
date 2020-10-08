import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForecastComponent } from './forecast/forecast.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DateComponent } from './date/date.component';

 const routes: Routes = [
  { path: 'cWeather',
    component: HomeComponent,
    children: [
      {path: 'date', component: DateComponent}
    ]
  },
  { path: '', redirectTo: '/cWeather', pathMatch: 'full'},
  { path: 'forecast', component: ForecastComponent
    /*children: [
      { path: '', component: GooglemapComponent }
    ]*/
  },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [HomeComponent, ForecastComponent];
