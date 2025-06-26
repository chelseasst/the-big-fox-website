import { Component, Input } from '@angular/core';
import { menuDrinkItem } from 'src/app/types/menu';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent {
  @Input('drink') drink!: menuDrinkItem;

}
