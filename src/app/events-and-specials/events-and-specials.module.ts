import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsAndSpecialsComponent } from './events-and-specials/events-and-specials.component';
import { EventComponent } from './event/event.component';
import { EventsAndSpecialsRoutingModule } from './events-and-specials-routing.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    EventsAndSpecialsComponent,
    EventComponent
  ],
  imports: [
    CommonModule, EventsAndSpecialsRoutingModule, CoreModule
  ]
})
export class EventsAndSpecialsModule { }
