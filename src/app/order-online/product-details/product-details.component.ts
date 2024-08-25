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
  isPopupOpen: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private popupService: OrderOnlineService
  ) {}

  ngOnInit(): void {
    //observable emitting new values when the route parameters change
    this.activatedRoute.params.subscribe((params) => {
      console.log(params, 'Params');
      //fetch the data
      // this.itemDetails = ''
    });
    this.popupService.isPopupOpen$.subscribe((isOpen) => {
      this.isPopupOpen = isOpen;
    });
  }

  increment() {
    this.quantityValue++;
  }
  decrement() {
    this.quantityValue--;
  }
  addToCart(quantity: string) {
    this.popupService.addItemToCart(quantity);
  }
}
