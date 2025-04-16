import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { orderItems } from 'src/app/types/order-online';
import { OrderOnlineService } from '../order-online.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  quantityValue: number = 1;
  itemDetails!: orderItems;
  isPopupOpen$ = this.orderOnlineService.isPopupOpen$;
  showQuantRange: boolean = false;
  readonly MIN_VALUE: number = 1;
  readonly MAX_VALUE: number = 5;

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderOnlineService: OrderOnlineService
  ) { }

  ngOnInit(): void {
    //observable emitting new values when the route parameters change
    this.activatedRoute.params.subscribe((params) => {
      //TODO fetch the data, don't hardcode it;
      this.itemDetails = {
        id:'1',
        type: 'Picnic Cookies Box',
        description: 'Set of 6 Chocolate Chips Cookies',
        excessivedescription:
          'Our signiture cookies ar emade in the early hours of the morning, when our baker is still asleep, but knowing he makes the best cookies in town, he is waking up early every morning to prepare the ingredients and mix this portion of sweet magic. In the cookies is inserted the best Belgium milk chocolate, not toocrispy, also but not melting, I told you - magic.',
        ingredients: 'favour, sugar, Belgium milk chocolate, heat',
        price: 15,
        peaces: 6,
        link: '',
        images: ['../assets/order-online/cookies.JPG', '../assets/order-online/cookies.JPG', '../assets/order-online/cookies.JPG'],
      };
    });
  }
  increment() {
    if (this.quantityValue < this.MAX_VALUE) {
      this.quantityValue++;
      this.showQuantRange = false;
    } else {
      this.showQuantRange = true;
    }
  }
  decrement() {
    if (this.quantityValue > this.MIN_VALUE) {
      this.quantityValue--;
      this.showQuantRange = false;
    } else {
      this.showQuantRange = true;
    }
  }
  addToCart(item: orderItems, quantity: string) {
    this.orderOnlineService.addItemToCart(item, quantity);
  
  }
}