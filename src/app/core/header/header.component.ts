import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class HeaderComponent {
  isDesktop: boolean = false;
  giftBannerVisible: boolean = true;
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 999px)'])
      .subscribe((result) => {
        this.isDesktop = !result.matches;
      });
  }
  updateGiftBanner(value: boolean) {
    this.giftBannerVisible = value;
  }
}
