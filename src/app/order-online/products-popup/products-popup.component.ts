import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { OrderOnlineService } from '../order-online.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Subscribable, Subscription } from 'rxjs';

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
          'transform-origin': 'center center',
        })
      ),
      state(
        'visible',
        style({
          opacity: 1,
          ttransform: 'scale(1)',
          'transform-origin': 'center center',
        })
      ),
      transition('hidden <=> visible', [animate('1s ease-in-out')]),
    ]),
  ],
})
export class ProductsPopupComponent implements OnInit, OnDestroy {
  isPopupOpen: boolean = false;
  subsc!: Subscription;
  constructor(private popupService: OrderOnlineService) {}

  closePopUp() {
    this.isPopupOpen = false;
    setTimeout(() => {
      this.popupService.closePopup();
    }, 400);
  }
  ngOnInit(): void {
    this.subsc = this.popupService.isPopupOpen$.subscribe((isOpen) => {
      setTimeout(() => {
        this.isPopupOpen = isOpen;
      }, 100);
    });
  }
  ngOnDestroy() {
    this.subsc.unsubscribe();
  }
}
