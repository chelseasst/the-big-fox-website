import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { basketItem } from '../types/basketItem';
import { itemDetails } from '../types/itemDetails';

@Injectable({
  providedIn: 'root',
})
export class OrderOnlineService {
  readonly MIN_VALUE: number = 1;
  readonly MAX_VALUE: number = 5;
  foodItems: itemDetails[] = [];
  merchItems: itemDetails[] = [];
  private popupOpenStateSubject = new BehaviorSubject<boolean>(false);
  isCartPopupOpen$ = this.popupOpenStateSubject.asObservable();

  private itemsCountSubject = new BehaviorSubject<number>(0);
  itemsCount$ = this.itemsCountSubject.asObservable();

  private isCartVisibleSubject = new BehaviorSubject<boolean>(false);
  isCartVisible$ = this.isCartVisibleSubject.asObservable();

  private cartItemsSubject = new BehaviorSubject<basketItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  private currItemSubject = new ReplaySubject<basketItem>();
  currItem$ = this.currItemSubject.asObservable();

  openPopup() {
    this.popupOpenStateSubject.next(true);
  }
  closePopup() {
    this.popupOpenStateSubject.next(false);
  }
  async getFoodItems(): Promise<itemDetails[] | { message: string }> {
    if (this.foodItems.length > 0) {
      console.log('Items got from the Service');
      return this.foodItems;
    }
    try {
      console.log('Items fetched again');
      const response = await fetch("http://localhost:3000/api/food", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch items.");
      }
      const products = await response.json();
      this.foodItems = products;
      return products
    } catch (error) {
      return error instanceof Error ? { message: error.message } : { message: "An unexpected error occurred." };
    }
  }
  async getItemById(slug: string): Promise<itemDetails | { message: string }> {
    if (!slug) {
      return { message: "Invalid slug provided." };
    }
    try {
      const response = await fetch(`http://localhost:3000/api/food/${slug}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch item.");
      }

      const item = await response.json();
      return item
    } catch (error) {
      console.error("Error fetching item:", error);
      return error instanceof Error ? { message: error.message } : { message: "An unexpected error occurred." };
    }
  }
  addItemToCart(product: basketItem, quantity: string) {
    this.currItemSubject.next(product);
    this.openPopup();
    const currentCount = this.itemsCountSubject.value;
    this.isCartVisibleSubject.next(true);
    this.itemsCountSubject.next(currentCount + parseInt(quantity));

    const currCart = this.cartItemsSubject.value;
    const existingItem = currCart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += parseInt(quantity);
    } else {
      currCart.push(product);
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
  fetchStoreItems() {

  }
  fetchMerchItems() {

  }
}
