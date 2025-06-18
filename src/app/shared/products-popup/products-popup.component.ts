import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { OrderOnlineService } from '../../order-online/order-online.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Subscription } from 'rxjs';
import { basketItem } from 'src/app/types/basketItem';

@Component({
  selector: 'app-products-popup',
  templateUrl: './products-popup.component.html',
  styleUrls: ['./products-popup.component.css'],
  animations: [
    trigger('popupAnimation', [
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'scale(0.7)',
        })
      ),
      state(
        'visible',
        style({
          opacity: 1,
          transform: 'scale(1)',
        })
      ),
      transition('hidden <=> visible', [animate('1s ease-in-out')]),
    ]),
  ],
})
export class ProductsPopupComponent implements OnInit, OnDestroy {
  isPopupOpen: boolean = false;
  subsc!: Subscription;
  currItem!: basketItem;

  
  constructor(private orderOnlineService: OrderOnlineService) { }

  ngOnInit(): void {
    this.orderOnlineService.currItem$.subscribe((item) => {
       this.currItem = item;
    })
    this.subsc = this.orderOnlineService.isCartPopupOpen$.subscribe((isOpen) => {
      this.isPopupOpen = isOpen;
    });
  }
  closePopup() {
    this.isPopupOpen = false;
    //for this component - so the animation has time to happen,
    // before the parent removes the component
    setTimeout(() => {
      this.orderOnlineService.closePopup();
    }, 400); //for the parent component
  }
  ngOnDestroy() {
    this.subsc.unsubscribe();
  }
}
