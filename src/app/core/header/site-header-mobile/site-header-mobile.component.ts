import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, OnInit, Renderer2 } from '@angular/core';
import { MenuNavService } from './menu-nav.service';

@Component({
  selector: 'site-header-mobile',
  templateUrl: 'site-header-mobile.component.html',
  styleUrls: ['site-header-mobile.component.css'],
  animations: [
    trigger('slideDownUp', [
      state(
        'down',
        style({
          transform: 'translateY(0)',
          visibility: 'visible',
        })
      ),
      state(
        'up',
        style({
          transform: 'translateY(-100%)',
          visibility: 'hidden',
        })
      ),
      transition('down <=> up', [animate('0.5s ease-out')]),
      //the seconds that the sliding will last
    ]),
    // trigger('btnVisibleState', [
    //   state(
    //     'hidden',
    //     style({
    //       opacity: 0,
    //       backgroundColor: 'transparent',
    //     })
    //   ),
    //   state(
    //     'visible',
    //     style({
    //       opacity: 1,
    //       color: '#c65234',
    //     })
    //   ),
    //   transition('hidden <=> visible', [animate('1s ease')])
    // ]),
  ],
})
export class SiteHeaderMobileComponent implements OnInit {
  menuState: string = 'up';
  isSubMenuShown: boolean = false;
  @Input() giftBannerShowed!: boolean;

  constructor(private menuNavService: MenuNavService, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.menuNavService.menuStateObs$.subscribe((state) => {
      this.menuState = state;
    });
  }
  ngOnChanges() {
    this.updateBanner(this.giftBannerShowed);
  }
  toggleMainMenuDown() {
    setTimeout(() => {
      this.menuNavService.openMenu();
    }, 100);
    //the mili seconds before the sliding will take place
    //just a spall type of delay, so its nto abrupt
  }
  toggleMainMenuUp() {
    setTimeout(() => {
      this.menuNavService.closeMenu();
    }, 100);
  }
  toggleSubMenu() {
    this.isSubMenuShown = !this.isSubMenuShown;
  }
  updateBanner(isShowed: boolean) {
    const navEl = this.el.nativeElement.querySelector('.fixed-nav');
    const logoEl = this.el.nativeElement.querySelector('.fixed-logo');
    if (!isShowed) {
      this.renderer.addClass(navEl, 'banner-removed-nav');
      this.renderer.addClass(logoEl, 'banner-removed-logo');
    } else {
      this.renderer.removeClass(navEl, 'banner-removed-nav');
      this.renderer.removeClass(logoEl, 'banner-removed-logo');
    }
  }
}
