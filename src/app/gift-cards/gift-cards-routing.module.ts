import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { FormPhysicalCardComponent } from './form-physical-card/form-physical-card.component';
import { FormDigitalCardComponent } from './form-digital-card/form-digital-card.component';

const routes: Routes = [
  {
    path: '',
    component: GiftCardsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'digital-card'  },
      { path: 'physical-card', component: FormPhysicalCardComponent },
      { path: 'digital-card', component: FormDigitalCardComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiftCardsRoutingModule {}
