import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoursAndLocationComponent } from './hours-and-location/hours-and-location.component';
import { HoursAndLocationRoutingModule } from './hours-and-location-routing.module';
import { CoreModule } from '../core/core.module';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HoursAndLocationComponent, MapComponent],
  imports: [CommonModule, HoursAndLocationRoutingModule, CoreModule, SharedModule],
  exports: [MapComponent],
})
export class HoursAndLocationModule {}
