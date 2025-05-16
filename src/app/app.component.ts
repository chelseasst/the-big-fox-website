import { Component, OnInit, Renderer2 } from '@angular/core';
import { OrderOnlineService } from './order-online/order-online.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { itemDetails } from './types/itemDetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showInitPopup: boolean = true;
  isCartVisible$ = this.orderOnlineService.isCartVisible$;

  isCartPopupOpen$ = this.orderOnlineService.isCartPopupOpen$;
  quantityValue: number = 1;
  itemDetails!: itemDetails;
  private routerSubsc!: Subscription;
  constructor(private renderer: Renderer2, private orderOnlineService: OrderOnlineService, private router: Router) { }
  ngOnInit(): void {
    //Initial popup
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      this.showInitPopup = true;
      sessionStorage.setItem('hasVisited', 'true');
      this.togglePopup();
    }
    //Scroll to top, excluding Menu Gift Cards and Signup components
    this.routerSubsc = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const excl = ['menu-drinks', 'menu-bakery', 'physical-card', 'digital-card', 'login', 'register'];
        const currUrl = event.urlAfterRedirects;
        if (excl.some(route => currUrl.includes(route))) {
          return
        }
        window.scrollTo(0, 0);
      }
    });

  }
  togglePopup() {
    if (this.showInitPopup) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }
  closePopup() {
    this.showInitPopup = false;
    this.togglePopup();
  }
  ngOnDestroy() {
    this.routerSubsc.unsubscribe();
  }
}
