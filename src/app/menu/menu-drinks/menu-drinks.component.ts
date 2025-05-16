import { Component } from '@angular/core';
import { ItemsDrinks } from 'src/app/types/drinks';

@Component({
  selector: 'app-menu-drinks',
  templateUrl: './menu-drinks.component.html',
  styleUrls: ['./menu-drinks.component.css'],
})
export class MenuDrinksComponent {
  
  items: ItemsDrinks = {
    drinks: [
      {
        title: 'Cappuccino',
        small: 4,
        large: 6,
      },
      {
        title: 'Latte',
        small: 5,
        large: 7,
      },
      {
        title: 'Matcha',
        small: 6,
        large: 8,
      },
    ],
  };
}
