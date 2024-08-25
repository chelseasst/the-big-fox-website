import { Component, Input } from '@angular/core';
import { bakeryItem, ItemsBakery } from 'src/app/types/bakery';

@Component({
  selector: 'app-menu-item-bakery',
  templateUrl: './menu-item-bakery.component.html',
  styleUrls: ['./menu-item-bakery.component.css'],
})
export class MenuItemBakeryComponent {
  @Input('item') item!: bakeryItem;

}
