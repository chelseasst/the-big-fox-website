import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderOnlineService {
  private popupOpenStateSubject = new BehaviorSubject<boolean>(false);
  //has initial value which can be accessed;
  //emitting happens only in the service here
  isPopupOpen$ = this.popupOpenStateSubject.asObservable();
  //components can subscribe to the state through the observable;
  //but cannot emit values

  openPopup() {
    this.popupOpenStateSubject.next(true);
  }
  closePopup() {
    this.popupOpenStateSubject.next(false);
  }
  addItemToCart(quantity:string) {
    this.openPopup();
    //do the rest
  }
  isPopUpOpen(){
    return this.isPopupOpen$;
  }
}
