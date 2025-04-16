import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderOnlineService } from 'src/app/order-online/order-online.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  itemsCount$ = this.orderOnlineService.itemsCount$;
  constructor(private orderOnlineService: OrderOnlineService) {

  }
}
