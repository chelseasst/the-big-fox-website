import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderOnlineStoreComponent } from './order-online-store/order-online-store.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderOnlineCoffeeComponent } from './order-online-coffee/order-online-coffee.component';
import { OrderOnlineCakesComponent } from './order-online-cakes/order-online-cakes.component';
import { OrderOnlineMerchComponent } from './merch/order-online-merch/order-online-merch.component';
import { OrderOnlineBakeryComponent } from './order-online-bakery/order-online-bakery.component';
import { MenuNavGuard } from '../core/header/site-header-mobile/can-activate.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'store', // Redirect root path to "store"
    pathMatch: 'full',
  },
  {
    path: 'store',
    component: OrderOnlineStoreComponent, // Wrapper for store section
    canActivate: [MenuNavGuard], // Guard applied to "store"
  },
  {
    path: 'store/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'coffee',
    component: OrderOnlineCoffeeComponent,
    canActivate: [MenuNavGuard], // Guard applied to "coffee"
  },
  {
    path: 'cakes',
    component: OrderOnlineCakesComponent,
    canActivate: [MenuNavGuard], // Guard applied to "cakes"
  },
  {
    path: 'merch',
    component: OrderOnlineMerchComponent,
    canActivate: [MenuNavGuard], // Guard applied to "merch"
  },
  {
    path: 'bakery',
    component: OrderOnlineBakeryComponent,
    canActivate: [MenuNavGuard], // Guard applied to "bakery"
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderOnlineRoutingModule { }
