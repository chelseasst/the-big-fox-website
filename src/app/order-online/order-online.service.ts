import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { checkoutItem } from '../types/checkout';
import { orderItems } from '../types/order-online';

@Injectable({
  providedIn: 'root',
})
export class OrderOnlineService {
  readonly MIN_VALUE: number = 1;
  readonly MAX_VALUE: number = 5;
  private popupOpenStateSubject = new BehaviorSubject<boolean>(false);
  isPopupOpen$ = this.popupOpenStateSubject.asObservable();

  private itemsCountSubject = new BehaviorSubject<number>(0);
  itemsCount$ = this.itemsCountSubject.asObservable();

  private isCartVisibleSubject = new BehaviorSubject<boolean>(false);
  isCartVisible$ = this.isCartVisibleSubject.asObservable();

  private cartItemsSubject = new BehaviorSubject<checkoutItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  openPopup() {
    this.popupOpenStateSubject.next(true);
  }
  closePopup() {
    this.popupOpenStateSubject.next(false);
  }
  addItemToCart(product: orderItems, quantity: string) {
    this.openPopup();
    const currentCount = this.itemsCountSubject.value;
    this.isCartVisibleSubject.next(true);
    this.itemsCountSubject.next(currentCount + parseInt(quantity));

    const currCart = this.cartItemsSubject.value;
    const existingItem = currCart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += parseInt(quantity);
    } else {
      currCart.push({
        id: product.id,
        quantity: parseInt(quantity),
        type: product.type,
        images: product.images,
        price: product.price,
        color: product.color
      });
    }
    this.cartItemsSubject.next(currCart);
  }
  incrementQuantity(itemId: string) {
    const currCart = this.cartItemsSubject.value;
    const item = currCart.find(item => item.id === itemId);
    if (item && item.quantity < this.MAX_VALUE) {
      item.quantity += 1;
      this.cartItemsSubject.next(currCart);
      const currentCount = this.itemsCountSubject.value;
      this.itemsCountSubject.next(currentCount + 1);
    }
  }
  decrementQuantity(itemId: string) {
    const currCart = this.cartItemsSubject.value;
    const currentCount = this.itemsCountSubject.value;
    const item = currCart.find(item => item.id === itemId);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
      this.cartItemsSubject.next(currCart);
      this.itemsCountSubject.next(currentCount - 1);
      this.isCartVisibleSubject.next(currentCount - 1 > 0 ? true : false);
    } else {
      this.deleteItem(itemId);
    }
  }
  deleteItem(itemId: string) {
    const currCart = this.cartItemsSubject.value;
    const itemQuantity = currCart.find(item => item.id === itemId)?.quantity;
    if (itemQuantity) {
      const currentCount = this.itemsCountSubject.value - itemQuantity;
      this.itemsCountSubject.next(currentCount);
      this.isCartVisibleSubject.next(currentCount > 0 ? true : false);
    }
    const itemIndex = currCart.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
      currCart.splice(itemIndex, 1);
      this.cartItemsSubject.next(currCart);
    }
  }
}
