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
  @Input() giftBannerShowed!: EventEmitter<boolean>;

  constructor(private menuNavService: MenuNavService, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.menuNavService.menuStateObs$.subscribe((state) => {
      this.menuState = state;
    });
    this.giftBannerShowed.subscribe((isShowed) => {
      const logoNavElement = this.el.nativeElement.querySelector('.logo-nav-fixed');
      const buttonElement = this.el.nativeElement.querySelector('.buttons-wrapper');
      if (!isShowed) {
        this.renderer.addClass(logoNavElement, 'banner-removed-logo');
        this.renderer.addClass(buttonElement, 'banner-removed-button');
      } else {
        this.renderer.removeClass(logoNavElement, 'banner-removed-logo');
        this.renderer.removeClass(buttonElement, 'banner-removed-button');
      }
    });
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
}
