import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
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
      transition('down <=> up', [animate('1s ease-in-out')]),
      //the seconds that the sliding will last
    ]),
  ],
})
export class SiteHeaderMobileComponent implements OnInit {
  isShown: string = 'up';
  isSubMenuShown: boolean = false;
  constructor(private menuNavService: MenuNavService) {}

  ngOnInit(): void {
    this.menuNavService.menuStateObs$.subscribe((state) => {
      this.isShown = state;
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
