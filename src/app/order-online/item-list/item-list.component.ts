import { Component, Input } from '@angular/core';
import { orderItems } from 'src/app/types/order-online';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  @Input('item') item!: orderItems;
}
