import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurStoryComponent } from './our-story/our-story.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: OurStoryComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurStoryRoutingModule {}
