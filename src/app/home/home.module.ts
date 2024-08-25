import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MainMobileComponent } from './home-main-mobile/main-mobile.component';
import { MainDesktopComponent } from './home-main-desktop/main-desktop.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [HomeComponent, MainDesktopComponent, MainMobileComponent],
  imports: [HomeRoutingModule, SharedModule, CoreModule],
  exports: [HomeComponent],
  providers: [],
})
export class HomeModule {}
