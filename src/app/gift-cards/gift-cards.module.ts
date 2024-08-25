import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { GiftCardsRoutingModule } from './gift-cards-routing.module';
import { FormPhysicalCardComponent } from './form-physical-card/form-physical-card.component';
import { FormDigitalCardComponent } from './form-digital-card/form-digital-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GiftCardsComponent, FormPhysicalCardComponent, FormDigitalCardComponent],
  imports: [CommonModule, CoreModule, SharedModule, GiftCardsRoutingModule, FormsModule, ReactiveFormsModule],
  exports:[GiftCardsComponent]
})
export class GiftCardsModule {}
