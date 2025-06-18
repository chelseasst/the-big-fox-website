import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderOnlineStoreComponent } from './order-online-store/order-online-store.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderOnlineCoffeeComponent } from './order-online-coffee/order-online-coffee.component';
import { OrderOnlineCakesComponent } from './order-online-cakes/order-online-cakes.component';
import { OrderOnlineMerchComponent } from './merch/order-online-merch/order-online-merch.component';
import { OrderOnlineBakeryComponent } from './order-online-bakery/order-online-bakery.component';
import { MenuNavGuard } from '../utilis/can-activate.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'store', // Redirect root path to "store"
    pathMatch: 'full',
  },
  {
    path: 'store',
    component: OrderOnlineStoreComponent,
    canActivate: [MenuNavGuard],
  },
  {
    path: 'store/details/:slug',
    component: ProductDetailsComponent
  },
  {
    path: 'coffee',
    component: OrderOnlineCoffeeComponent,
  },
  {
    path: 'cakes',
    component: OrderOnlineCakesComponent,
  },
  {
    path: 'merch',
    component: OrderOnlineMerchComponent,
    canActivate: [MenuNavGuard],
  },
  {
    path: 'merch/details/:slug',
    component: ProductDetailsComponent
  },
  {
    path: 'bakery',
    component: OrderOnlineBakeryComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderOnlineRoutingModule { }
