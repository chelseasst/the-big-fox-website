import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
import { MenuNavService } from '../site-header-mobile/menu-nav.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'site-header-desktop',
  templateUrl: 'site-header-desktop.component.html',
  styleUrls: ['site-header-desktop.component.css'],
})
export class SiteHeaderDesktopComponent implements AfterViewInit {
  isSubMenuShown: boolean = false;
  @Input() giftBannerShowed!: boolean;
  @ViewChild('nav') nav!: ElementRef;
  constructor(private renderer: Renderer2, private el: ElementRef, private menuNavService: MenuNavService, private router: Router) { }
  ngAfterViewInit(): void {
    //header color change - signup&details -> black
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateHeaderColor(event.urlAfterRedirects);
      }
    });
    this.menuNavService.menuStateObs$.subscribe((state) => {
      this.isSubMenuShown = state === 'down' ? true : false;
    });
  }
  ngOnChanges() {
    this.updateBanner(this.giftBannerShowed);
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 70) {
      this.renderer.addClass(this.nav.nativeElement, 'scrolled');
    } else {
      this.renderer.removeClass(this.nav.nativeElement, 'scrolled');
    }
  }
  toggleSubmenu() {
    if (this.isSubMenuShown) {
      this.menuNavService.closeMenu();
    } else {
      this.menuNavService.openMenu();
    }
  }
  // TODO understand why is that needed 
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.updateHeaderColor(this.router.url);  // Reapply the header color logic on window resize
  }
  updateHeaderColor(url: string) {
    if (url.includes('signup') || url.includes('details')) {
      this.renderer.addClass(this.nav.nativeElement, 'black-header');
    } else {
      this.renderer.removeClass(this.nav.nativeElement, 'black-header');
    }
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
