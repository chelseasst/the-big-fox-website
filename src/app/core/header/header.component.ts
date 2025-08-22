import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isDesktop: boolean = false;
  giftBannerVisible: boolean = true;
  
  private destroy$ = new Subject<void>();

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 999px)'])
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.isDesktop = !result.matches;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateGiftBanner(value: boolean) {
    this.giftBannerVisible = value;
  }
}
