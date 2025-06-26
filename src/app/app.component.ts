import { Component, OnInit, Renderer2 } from '@angular/core';
import { OrderOnlineService } from './order-online/order-online.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { itemDetails } from './types/itemDetails';
import { AnalyticsService } from './shared/analytics-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showInitPopup!: boolean;
  isCartVisible$ = this.orderOnlineService.isCartVisible$;

  quantityValue: number = 1;
  itemDetails!: itemDetails;
  private routerSubsc!: Subscription;
  constructor(private renderer: Renderer2, private orderOnlineService: OrderOnlineService, private router: Router, private analyticsService: AnalyticsService) { }
  ngOnInit(): void {
    //Google Analytics
    this.analyticsService.init();

    //Scroll to top, excluding Menu Gift Cards and Signup components
    this.routerSubsc = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event instanceof NavigationEnd) {
          (window as any).ga('set', 'page', event.urlAfterRedirects);
          (window as any).ga('send', 'pageview');
        }
        const excl = ['menu-drinks', 'menu-bakery', 'physical-card', 'digital-card', 'login', 'register'];
        const currUrl = event.urlAfterRedirects;
        if (excl.some(route => currUrl.includes(route))) {
          return
        }
        window.scrollTo(0, 0);
      }   
    });
    const hasVisited = sessionStorage.getItem('hasVisited'); //'true', 'false';
    if (!hasVisited) {
      this.showInitPopup = true;
      sessionStorage.setItem('hasVisited', 'true');
      this.noScrollClass();
    }
    this.orderOnlineService.initCartState(); //fires the observables for Cart 
  }
  noScrollClass() {
    if (this.showInitPopup) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }
  closePopup() {
    this.showInitPopup = false;
    this.noScrollClass();
  }
  ngOnDestroy() {
    this.routerSubsc.unsubscribe();
  }
}
