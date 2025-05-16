import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderOnlineStoreComponent } from './order-online-store/order-online-store.component';
import { CoreModule } from '../core/core.module';
import { OrderOnlineRoutingModule } from './order-online-routing.module';
import { ItemListComponent } from './item-list/item-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderOnlineCoffeeComponent } from './order-online-coffee/order-online-coffee.component';
import { OrderOnlineMerchComponent } from './merch/order-online-merch/order-online-merch.component';
import { OrderOnlineBakeryComponent } from './order-online-bakery/order-online-bakery.component';
import { OrderOnlineCakesComponent } from './order-online-cakes/order-online-cakes.component';
import { ProductCardComponent } from './merch/product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    OrderOnlineStoreComponent,
    ItemListComponent,
    ProductDetailsComponent,
    OrderOnlineMerchComponent,
    OrderOnlineBakeryComponent,
    OrderOnlineCakesComponent,
    ProductCardComponent,
    OrderOnlineCoffeeComponent,
  ],
  imports: [CommonModule,OrderOnlineRoutingModule,CoreModule, SharedModule],
  exports: [OrderOnlineStoreComponent, OrderOnlineCoffeeComponent]
})
export class OrderOnlineModule {}
