import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderOnlineMerchComponent } from './merch/order-online-merch/order-online-merch.component';
import { MenuNavGuard } from '../utilis/can-activate.guard';
import { OrderOnlineStoreComponent } from './store/order-online-store.component';
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
    path: 'merch',
    component: OrderOnlineMerchComponent,
    canActivate: [MenuNavGuard],
  },
  {
    path: 'merch/details/:slug',
    component: ProductDetailsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderOnlineRoutingModule { }
