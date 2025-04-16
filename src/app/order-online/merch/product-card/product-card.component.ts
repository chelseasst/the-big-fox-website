import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('images') images: Array<string> = [];
  @Input('capt') capt: string = 'Item';
  @Input('price') price: string = 'Not available'
  addToCart(size: string) {

  }
}
 