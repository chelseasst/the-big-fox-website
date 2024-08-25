import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsAndSpecialsComponent } from './events-and-specials/events-and-specials.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: EventsAndSpecialsComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsAndSpecialsRoutingModule {}
