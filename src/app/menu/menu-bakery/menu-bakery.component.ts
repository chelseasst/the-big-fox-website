import { Component } from '@angular/core';
import { ItemsBakery } from 'src/app/types/bakery';

@Component({
  selector: 'app-menu-bakery',
  templateUrl: './menu-bakery.component.html',
  styleUrls: ['./menu-bakery.component.css'],
})
export class MenuBakeryComponent {
  items: ItemsBakery = {
    bakery: [
      {
        title: 'Bagel',
        description: 'The best in town',
        price: 3.5,
      },
    ],
  };
}
