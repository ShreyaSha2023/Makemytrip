import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { FilterComponent } from './filter/filter.component'

@NgModule({
  declarations: [
    HotelsComponent,
    HotelListComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    BsDatepickerModule.forRoot(),FormsModule,
    HttpClientModule
  ]
})
export class HotelsModule { }
