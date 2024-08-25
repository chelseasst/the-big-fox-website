import { NgModule } from '@angular/core';
import { BannerGiftCardComponent } from './banner-giftcard/banner-giftcrad.component';
import { SocialsComponent } from './socials/socials.component';
import { SiteLocationComponent } from './site-location/site-location.component';
import { PoweredByComponent } from './powered-by/powered-by.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BannerGiftCardComponent, SocialsComponent, SiteLocationComponent, PoweredByComponent, ButtonComponent],
  imports: [RouterModule],
  exports: [BannerGiftCardComponent, SocialsComponent, SiteLocationComponent, PoweredByComponent, ButtonComponent],
})
export class SharedModule {}
