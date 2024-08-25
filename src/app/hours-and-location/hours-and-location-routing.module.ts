import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoursAndLocationComponent } from './hours-and-location/hours-and-location.component';

const routes: Routes = [
    {path:'', pathMatch:'full', component:HoursAndLocationComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoursAndLocationRoutingModule {}
