import { NgModule } from '@angular/core';
import { BannerGiftCardComponent } from './banner-giftcard/banner-giftcrad.component';
import { SocialsComponent } from './socials/socials.component';
import { SiteLocationComponent } from './site-location/site-location.component';
import { PoweredByComponent } from './powered-by/powered-by.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [BannerGiftCardComponent, SocialsComponent, SiteLocationComponent, PoweredByComponent, ButtonComponent, ShoppingCartComponent, CheckoutComponent],
  imports: [CommonModule, RouterModule, SharedRoutingModule],
  exports: [BannerGiftCardComponent, SocialsComponent, SiteLocationComponent, PoweredByComponent, ButtonComponent, ShoppingCartComponent],
})
export class SharedModule { }
