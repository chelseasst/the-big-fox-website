import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { itemDetails } from '../types/itemDetails';
import { menuDrinkItem, menuFoodItem } from '../types/menu';
import { NgForm } from '@angular/forms';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderOnlineService {
  readonly MIN_VALUE: number = 1;
  readonly MAX_VALUE: number = 5;
  foodItems: itemDetails[] = [];
  merchItems: itemDetails[] = [];
  menuDrinks: menuDrinkItem[] = [];
  menuFood: menuFoodItem[] = [];
  private popupOpenStateSubject = new BehaviorSubject<boolean>(false);
  isCartPopupOpen$ = this.popupOpenStateSubject.asObservable();

  private itemsCountSubject = new BehaviorSubject<number>(0);
  itemsCount$ = this.itemsCountSubject.asObservable();

  private cartItemsSubject = new BehaviorSubject<itemDetails[]>(this.getCartItems());
  cartItems$ = this.cartItemsSubject.asObservable();

  private isCartVisibleSubject = new BehaviorSubject<boolean>(false);
  isCartVisible$ = this.isCartVisibleSubject.asObservable();


  openPopup() {
    this.popupOpenStateSubject.next(true);
  }
  closePopup() {
    this.popupOpenStateSubject.next(false);
  }

  async getFoodItems(): Promise<itemDetails[] | { message: string }> {
    if (this.foodItems.length > 0) {
      return this.foodItems;
    }
    try {
      const response = await fetch(`${environment.apiUrl}/food`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      console.log('🌍 Using API URL:', environment.apiUrl);
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
  async getMerchItems(): Promise<itemDetails[] | { message: string }> {
    if (this.merchItems.length > 0) {
      return this.merchItems;
    }
    try {
      const response = await fetch(`${environment.apiUrl}/merch`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch items.");
      }
      const products = await response.json();
      this.merchItems = products;
      return products
    } catch (error) {
      return error instanceof Error ? { message: error.message } : { message: "An unexpected error occurred." };
    }
  }

  async getMenuDrinks(): Promise<menuDrinkItem[] | { message: string }> {
    if (this.menuDrinks.length > 0) {
      return this.menuDrinks;
    }
    try {
      const response = await fetch(`${environment.apiUrl}/menu/drinks`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch items.");
      }
      const drinks = await response.json();
      this.menuDrinks = drinks;
      return drinks
    } catch (error) {
      return error instanceof Error ? { message: error.message } : { message: "An unexpected error occurred." };
    }
  }
  async getMenuFood(): Promise<menuFoodItem[] | { message: string }> {
    if (this.menuFood.length > 0) {
      return this.menuFood;
    }
    try {
      const response = await fetch(`${environment.apiUrl}/menu/food`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch items.");
      }
      const food = await response.json();
      this.menuFood = food;
      return food
    } catch (error) {
      return error instanceof Error ? { message: error.message } : { message: "An unexpected error occurred." };
    }
  }
  async getItemById(slug: string, collection: string): Promise<itemDetails | { message: string }> {
    if (!slug) {
      return { message: "Invalid slug provided." };
    }
    if (collection === 'food') {
      if (this.foodItems.length > 0) {
        const item = this.foodItems.find(item => item.slug === slug);

        return item ? item : { message: "An unexpected error occurred." }
      }
      return await this.getFoodById(slug);
    } else {
      if (this.merchItems.length > 0) {
        const item = this.merchItems.find(item => item.slug === slug);
        return item ? item : { message: "An unexpected error occurred." }
      }
      return await this.getMerchById(slug);
    }
  }

  async getFoodById(slug: string) {
    try {
      const response = await fetch(`${environment.apiUrl}/food/${slug}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch item.");
      }

      const item = await response.json();
      console.log('item', item)
      return item
    } catch (error) {
      console.error("Error fetching item:", error);
      return error instanceof Error ? { message: error.message } : { message: "An unexpected error occurred." };
    }
  }

  async getMerchById(slug: string) {
    try {
      const response = await fetch(`${environment.apiUrl}/merch/${slug}`, {
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

  addItemToCart(product: itemDetails, quantity: number) {
    const cart = this.getCartItems();
    const existing = cart.find(item => item.slug === product.slug);
    if (existing?.quantity) {
      existing.quantity += quantity;
    } else {
      product.quantity = quantity;
      cart.push(product);
    }

    const newCount = this.getItemsCount() + quantity;
    this.setCartState(cart, newCount);

    this.openPopup();
  }
  async addGiftCardToCart(form: NgForm, image: string) {
    console.log('form values', form.value)
    const productObj: itemDetails = {
      slug: form.value.recipName,
      title: `Gift Card - ${form.value.recipName}`,
      description: 'Personalized Gift Card',
      fullDescription: 'Can be used in a period of 1 year after puchase.',
      price: form.value.amount,
      pieces: 1,
      images: [image],
      giftCard: {
        recipName: form.value.recipName,
        recipEmail: form.value.recipEmail,
        recipAdress: form.value.recipAdress ?? undefined,
        recipAdress2: form.value.recipAdress2 ?? undefined,
        city: form.value.city,
        state: form.value.state,
        zipCode: form.value.zipCode ?? undefined,
        country: form.value.contry ?? undefined,
        deliveryDate: form.value.deliveryDate ?? undefined,
        senderName: form.value.senderName,
        senderEmail: form.value.senderEmail ?? undefined,
        message: form.value.message ?? undefined,
        design: form.value.design,
        images: [image]
      }
    }
    this.addItemToCart(productObj, 1);
  }

  initCartState() {
    const itemsCount = sessionStorage.getItem('itemsCount');
    if (itemsCount && itemsCount !== '0') {
      this.isCartVisibleSubject.next(true);
      this.itemsCountSubject.next(JSON.parse(itemsCount));
    }
  }

  incrementQuantity(slug: string) {
    const cart = this.getCartItems();
    const exsiting = cart.find(item => item.slug === slug);
    if (!exsiting) return
    if (exsiting?.quantity) {
      if (exsiting.quantity >= 5) return
      exsiting.quantity += 1;
    }

    const newCount = this.getItemsCount() + 1;
    this.setCartState(cart, newCount);
  }

  decrementQuantity(slug: string) {
    const cart = this.getCartItems();
    const exsiting = cart.find(item => item.slug === slug);
    if (!exsiting) return

    if (exsiting?.quantity && exsiting.quantity <= 1) {
      this.deleteItem(slug);
      return
    }
    if (exsiting?.quantity) exsiting.quantity -= 1;
    const newCount = this.getItemsCount() - 1;
    this.setCartState(cart, newCount);
  }

  deleteItem(slug: string) {
    const cart = this.getCartItems();
    const itemToDelete = cart.find(item => item.slug === slug);

    const quantityToRemove = itemToDelete?.quantity || 0;
    const newItems = cart.filter(item => item.slug != slug);

    this.setCartState(newItems, this.getItemsCount() - quantityToRemove);
  }

  private setCartState(cart: itemDetails[], newCount: number): void {
    sessionStorage.setItem('cart', JSON.stringify(cart));
    sessionStorage.setItem('itemsCount', JSON.stringify(newCount));

    this.cartItemsSubject.next(cart);
    this.itemsCountSubject.next(newCount);
    this.isCartVisibleSubject.next(newCount > 0);
  }
  private getItemsCount(): number {
    return JSON.parse(sessionStorage.getItem('itemsCount') || '0');
  }
  getCartItems(): itemDetails[] {
    return JSON.parse(sessionStorage.getItem('cart') || '[]');
  }
  fetchStoreItems() {

  }
  fetchMerchItems() {

  }
}
