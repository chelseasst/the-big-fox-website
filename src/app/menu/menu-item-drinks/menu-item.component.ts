import { Component, Input } from '@angular/core';
import { Drink } from 'src/app/types/drinks';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent {
  @Input('drink') drink!: Drink;

}
