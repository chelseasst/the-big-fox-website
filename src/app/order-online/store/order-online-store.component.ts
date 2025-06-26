import { Component, OnInit } from '@angular/core';
import { itemDetails } from 'src/app/types/itemDetails';
import { OrderOnlineService } from '../order-online.service';

@Component({
  selector: 'app-order-online-store',
  templateUrl: './order-online-store.component.html',
  styleUrls: ['./order-online-store.component.css'],
})
export class OrderOnlineStoreComponent implements OnInit {
  items: itemDetails[] | undefined;
  message: string = '';
  constructor(private orderOnlineService: OrderOnlineService) { }
  ngOnInit(): void {
    this.getItems();
  }
  async getItems() {
    const data = await this.orderOnlineService.getFoodItems();
    if (Array.isArray(data)) {
      this.items = data;
    } else if (data && "message" in data) {
      this.message = data.message;
    } else {
      this.message = "Unexpected response format.";
    }
  }

}
