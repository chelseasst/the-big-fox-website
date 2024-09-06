import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { SiteHeaderDesktopComponent } from './header/site-header-desktop/site-header-desktop.component';
import { SiteHeaderMobileComponent } from './header/site-header-mobile/site-header-mobile.component';
import { CommonModule } from '@angular/common';
import { AppFooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { InitialSectionComponent } from './initial-section/initial-section.component';
import { InitialPopupComponent } from './initial-popup/initial-popup.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SiteHeaderMobileComponent,
    SiteHeaderDesktopComponent,
    AppFooterComponent,
    InitialSectionComponent,
    InitialPopupComponent,
    MessageComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [HeaderComponent, AppFooterComponent, InitialSectionComponent, InitialPopupComponent, MessageComponent],
  providers: [],
})
export class CoreModule {}
