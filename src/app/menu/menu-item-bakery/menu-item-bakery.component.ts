import { Component, Input } from '@angular/core';
import { menuFoodItem } from 'src/app/types/menu';

@Component({
  selector: 'app-menu-item-bakery',
  templateUrl: './menu-item-bakery.component.html',
  styleUrls: ['./menu-item-bakery.component.css'],
})
export class MenuItemBakeryComponent {
  @Input('item') item!: menuFoodItem;

}
