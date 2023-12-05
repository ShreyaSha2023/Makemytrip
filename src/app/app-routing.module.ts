import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainsComponent } from './trains/trains/trains.component';
import { HotelListComponent } from './hotels/hotel-list/hotel-list.component';

const routes: Routes = [{ path: 'flights', loadChildren: () => import('./flights/flights.module').then(m => m.FlightsModule) },
 { path: 'buses', loadChildren: () => import('./buses/buses.module').then(m => m.BusesModule) },

{ path: 'hotels', loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule) },

 {path:'trains',component:TrainsComponent},
 {path:'hotel-list',component:HotelListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
