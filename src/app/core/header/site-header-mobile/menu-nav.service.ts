import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuNavService {
  private menuStateSubject = new BehaviorSubject<string>('up');
  menuStateObs$ = this.menuStateSubject.asObservable();

  constructor() {}

  openMenu(){
    this.menuStateSubject.next('down');
  }
  closeMenu(){
    this.menuStateSubject.next('up');
  }
}
