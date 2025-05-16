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
  fetchStoreItems(){

  }
  fetchMerchItems(){

  }
  getItemById(id:string):itemDetails{
    return  {
      id: '1',
      title: 'Picnic Cookies Box',
      description: 'Set of 6 Chocolate Chips Cookies',
      excessiveDescription:
        'Our signiture cookies ar emade in the early hours of the morning, when our baker is still asleep, but knowing he makes the best cookies in town, he is waking up early every morning to prepare the ingredients and mix this portion of sweet magic. In the cookies is inserted the best Belgium milk chocolate, not toocrispy, also but not melting, I told you - magic.',
      ingredients: 'favour, sugar, Belgium milk chocolate, heat',
      price: 15,
      pieces: 6,
      link: '',
      images: ['../assets/order-online/cookies.JPG', '../assets/order-online/cookies.JPG', '../assets/order-online/cookies.JPG'],
    };
  }
}
