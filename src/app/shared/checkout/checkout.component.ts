import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderOnlineService } from 'src/app/order-online/order-online.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  itemsCount$ = this.orderOnlineService.itemsCount$;
  cartItems$ = this.orderOnlineService.cartItems$;
  constructor(private orderOnlineService: OrderOnlineService,private route: ActivatedRoute) {
   
      this.route.url.subscribe(url => console.log('Current route:', url));
    
   }

  increment(itemId: string) {
    this.orderOnlineService.incrementQuantity(itemId);
  }
  decrement(itemId: string) {
    this.orderOnlineService.decrementQuantity(itemId);
  }
  deleteItem(itemId: string) {
    this.orderOnlineService.deleteItem(itemId);
  }
}
