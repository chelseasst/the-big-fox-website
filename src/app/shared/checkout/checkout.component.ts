import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderOnlineService } from 'src/app/order-online/order-online.service';
import { itemDetails } from 'src/app/types/itemDetails';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  itemsCount$ = this.orderOnlineService.itemsCount$;
  cartItems$!: Observable<itemDetails[]>;
  constructor(private orderOnlineService: OrderOnlineService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.cartItems$ = this.orderOnlineService.cartItems$;
  }
  increment(slug: string) {
    this.orderOnlineService.incrementQuantity(slug);
  }
  decrement(slug: string) {
    this.orderOnlineService.decrementQuantity(slug);

  }
  deleteItem(slug: string) {
    this.orderOnlineService.deleteItem(slug);
  }
}
