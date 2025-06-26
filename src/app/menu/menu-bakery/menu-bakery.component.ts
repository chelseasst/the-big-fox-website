import { Component } from '@angular/core';
import { OrderOnlineService } from 'src/app/order-online/order-online.service';
import { menuFoodItem } from 'src/app/types/menu';

@Component({
  selector: 'app-menu-bakery',
  templateUrl: './menu-bakery.component.html',
  styleUrls: ['./menu-bakery.component.css'],
})
export class MenuBakeryComponent {
  constructor(private orderOnlineService: OrderOnlineService) { }
  items: menuFoodItem[] | undefined = [];
  message: string = '';
  ngOnInit(): void {
    console.log('in ng on init')
    this.getItems();
  }
  async getItems() {
    console.log('in get items')

    const data = await this.orderOnlineService.getMenuFood();
    if (Array.isArray(data)) {
      this.items = data;
    } else if (data && "message" in data) {
      this.message = data.message;
    } else {
      this.message = "Unexpected response format.";
    }

  }
}
