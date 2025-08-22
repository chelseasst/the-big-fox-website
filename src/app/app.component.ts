import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { OrderOnlineService } from './order-online/order-online.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { itemDetails } from './types/itemDetails';
import { AnalyticsService } from './shared/analytics-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  showInitPopup!: boolean;
  isCartVisible$ = this.orderOnlineService.isCartVisible$;

  quantityValue: number = 1;
  itemDetails!: itemDetails;
  currUrl: string = '';

  private destroy$ = new Subject<void>();

  constructor(private renderer: Renderer2, private orderOnlineService: OrderOnlineService, private router: Router, private analyticsService: AnalyticsService) { }

  ngOnInit(): void {
    //Google Analytics
    this.analyticsService.init();
    const excl = ['menu-drinks', 'menu-bakery', 'physical-card', 'digital-card', 'login', 'register'];
    //Scroll to top, excluding some components
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event instanceof NavigationEnd) {
          (window as any).ga('set', 'page', event.urlAfterRedirects);
          (window as any).ga('send', 'pageview');
        }
        const prevUrl = this.currUrl;
        this.currUrl = event.urlAfterRedirects;
        const isInitialMenuNav = this.currUrl.startsWith('/menu') && !prevUrl.startsWith('/menu');
        if (excl.some(route => this.currUrl.includes(route)) && !isInitialMenuNav) {
          return
        }
        window.scrollTo(0, 0);
      }
    });
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      this.showInitPopup = true;
      sessionStorage.setItem('hasVisited', 'true');
      this.noScrollClass();
    }
    this.orderOnlineService.initCartState(); //fires the observables for Cart 
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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
}
