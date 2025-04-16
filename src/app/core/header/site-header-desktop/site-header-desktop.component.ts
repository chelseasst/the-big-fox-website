import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { MenuNavService } from '../site-header-mobile/menu-nav.service';

@Component({
  selector: 'site-header-desktop',
  templateUrl: 'site-header-desktop.component.html',
  styleUrls: ['site-header-desktop.component.css'],
})
export class SiteHeaderDesktopComponent implements OnInit {
  isSubMenuShown: boolean = false;
  @Input() giftBannerShowed!: EventEmitter<boolean>;
  constructor(private renderer: Renderer2, private el: ElementRef, private menuNavService: MenuNavService) { }
  ngOnInit(): void {
    this.menuNavService.menuStateObs$.subscribe((state) => {
      this.isSubMenuShown = state === 'down' ? true : false;
    });
    this.giftBannerShowed.subscribe((isShowed) => {
      const logoMenuElement = this.el.nativeElement.querySelector('.logo-menu-wrapper');
      if (!isShowed) {
        this.renderer.addClass(logoMenuElement, 'banner-removed');
      } else {
        this.renderer.removeClass(logoMenuElement, 'banner-removed');
      }
    });
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = this.el.nativeElement.querySelector('.site-nav');
    if (window.scrollY > 70) { // Adjust this threshold if needed
      this.renderer.addClass(header, 'scrolled');
    } else {
      this.renderer.removeClass(header, 'scrolled');
    }
  }
  toggleSubmenu() {
    if (this.isSubMenuShown) {
      this.menuNavService.closeMenu();
    } else {
      this.menuNavService.openMenu();
    }
  }
}
