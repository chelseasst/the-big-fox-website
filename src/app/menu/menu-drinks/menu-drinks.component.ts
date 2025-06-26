import { Component, OnInit } from '@angular/core';
import { OrderOnlineService } from 'src/app/order-online/order-online.service';
import { menuDrinkItem } from 'src/app/types/menu';

@Component({
  selector: 'app-menu-drinks',
  templateUrl: './menu-drinks.component.html',
  styleUrls: ['./menu-drinks.component.css'],
})
export class MenuDrinksComponent implements OnInit {
  constructor(private orderOnlineService: OrderOnlineService) { }
  items: menuDrinkItem[] | undefined = [];
  message: string = '';
  ngOnInit(): void {
    this.getItems();
  }
  async getItems() {
    const data = await this.orderOnlineService.getMenuDrinks();
    if (Array.isArray(data)) {
      this.items = data;
    } else if (data && "message" in data) {
      this.message = data.message;
    } else {
      this.message = "Unexpected response format.";
    }

  }
}
