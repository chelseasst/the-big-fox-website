import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderOnlineStoreComponent } from './order-online-store/order-online-store.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'store' },
  {
    path: 'store',
    children: [                        //temporary - change to OrderOnlineComponent
      { path: '', pathMatch: 'full', component: ProductDetailsComponent },
      { path: ':id', component: ProductDetailsComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderOnlineRoutingModule {}
