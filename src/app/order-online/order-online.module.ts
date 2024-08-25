import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderOnlineStoreComponent } from './order-online-store/order-online-store.component';
import { CoreModule } from '../core/core.module';
import { OrderOnlineRoutingModule } from './order-online-routing.module';
import { ItemListComponent } from './item-list/item-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsPopupComponent } from './products-popup/products-popup.component';

@NgModule({
  declarations: [
    OrderOnlineStoreComponent,
    ItemListComponent,
    ProductDetailsComponent,
    ProductsPopupComponent,
  ],
  imports: [CommonModule, CoreModule, OrderOnlineRoutingModule],
  exports: [OrderOnlineStoreComponent]
})
export class OrderOnlineModule {}
