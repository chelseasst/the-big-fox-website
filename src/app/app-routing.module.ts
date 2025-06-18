import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuNavGuard } from './utilis/can-activate.guard';
import { AuthGuard } from './utilis/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
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
    canActivate: [AuthGuard, MenuNavGuard],
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
    path: 'admin-dashboard',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    // canActivate: [MenuNavGuard],
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./shared/shared.module').then(
        (m) => m.SharedModule
      ),
    canActivate: [MenuNavGuard],
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupModule),
    canActivate: [MenuNavGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
