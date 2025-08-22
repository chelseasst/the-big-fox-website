import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MenuNavService } from '../site-header-mobile/menu-nav.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'site-header-desktop',
  templateUrl: 'site-header-desktop.component.html',
  styleUrls: ['site-header-desktop.component.css'],
})
export class SiteHeaderDesktopComponent implements OnInit, OnDestroy {
  isSubMenuShown: boolean = false;
  userName: string | null = null;
  @Input() giftBannerShowed!: boolean;
  @ViewChild('nav') nav!: ElementRef;
  
  private destroy$ = new Subject<void>();

  constructor(private renderer: Renderer2, private el: ElementRef, private menuNavService: MenuNavService, private userService: UserService, private router: Router) { }
  
  ngOnInit(): void {
    //header color change - signup&details -> black
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateHeaderColor(event.urlAfterRedirects);
      }
    });
    this.menuNavService.menuStateObs$.pipe(takeUntil(this.destroy$)).subscribe((state) => {
      this.isSubMenuShown = state === 'down' ? true : false;
    });
    this.userService.user$.pipe(takeUntil(this.destroy$)).subscribe((user) => {
      this.userName = user?.userName || null;
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
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.updateHeaderColor(this.router.url);  // Reapply the header color logic on window resize
  }
  updateHeaderColor(url: string) {
    if (url.includes('details') || url.includes('signup') || url.includes('checkout') || url.includes('admin-dashboard')) {
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
  logout(): void {
    this.userService.logout();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
