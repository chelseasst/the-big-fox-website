import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderOnlineStoreComponent } from './store/order-online-store.component';
import { CoreModule } from '../core/core.module';
import { OrderOnlineRoutingModule } from './order-online-routing.module';
import { ItemListComponent } from './item-list/item-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderOnlineMerchComponent } from './merch/order-online-merch/order-online-merch.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    OrderOnlineStoreComponent,
    ItemListComponent,
    ProductDetailsComponent,
    OrderOnlineMerchComponent,
  ],
  imports: [CommonModule, OrderOnlineRoutingModule, CoreModule, SharedModule],
  exports: [OrderOnlineStoreComponent]
})
export class OrderOnlineModule { }
