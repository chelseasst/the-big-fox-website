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
import { ProductsPopupComponent } from './products-popup/products-popup.component';
import { AnimateOnScrollDirective } from './directives/animate-on-scroll.directive';
@NgModule({
  declarations: [BannerGiftCardComponent, SocialsComponent, SiteLocationComponent, PoweredByComponent, ButtonComponent, ShoppingCartComponent, CheckoutComponent, ProductsPopupComponent, AnimateOnScrollDirective],
  imports: [CommonModule, RouterModule, SharedRoutingModule],
  exports: [BannerGiftCardComponent, SocialsComponent, SiteLocationComponent, PoweredByComponent, ButtonComponent, ShoppingCartComponent, ProductsPopupComponent, AnimateOnScrollDirective],
})
export class SharedModule { }
