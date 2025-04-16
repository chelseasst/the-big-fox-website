import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { MenuNavGuard } from './core/header/site-header-mobile/can-activate.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => HomeModule),
  },
  {
    path: 'our-story',
    loadChildren: () =>
      import('./our-story/our-story.module').then((m) => m.OurStoryModule),
    canActivate: [MenuNavGuard],
  },
  {
    path: 'hours-and-location',
    loadChildren: () =>
      import('./hours-and-location/hours-and-location.module').then(
        (m) => m.HoursAndLocationModule
      ),
    canActivate: [MenuNavGuard],
  },
  {
    path: 'events-and-specials',
    loadChildren: () =>
      import('./events-and-specials/events-and-specials.module').then(
        (m) => m.EventsAndSpecialsModule
      ),
    canActivate: [MenuNavGuard],
  },
  {
    path: 'gift-cards',
    loadChildren: () =>
      import('./gift-cards/gift-cards-routing.module').then(
        (m) => m.GiftCardsRoutingModule
      ),
    canActivate: [MenuNavGuard],
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then((m) => m.MenuModule),
    canActivate: [MenuNavGuard],
  },
  {
    path: 'order-online',
    loadChildren: () =>
      import('./order-online/order-online.module').then(
        (m) => m.OrderOnlineModule
      ),
    canActivate: [MenuNavGuard],
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./shared/shared.module').then(
        (m) => m.SharedModule
      ),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupModule),
    canActivate: [MenuNavGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
