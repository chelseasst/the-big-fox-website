import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'home-main-mobile',
  templateUrl: 'main-mobile.component.html',
  styleUrls: ['main-mobile.component.css'],
})
export class MainMobileComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('fadeImg') fadeImgs!: QueryList<ElementRef>; //just a wrapper around the actual DOM el
  @ViewChildren('contentCont') contentCont!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); //so that it animates again
        }
      })
    });
    this.fadeImgs.forEach((el) => {
      this.observer.observe(el.nativeElement);
    });
    this.contentCont.forEach((el) => {
      this.observer.observe(el.nativeElement);
    });
  }
  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
