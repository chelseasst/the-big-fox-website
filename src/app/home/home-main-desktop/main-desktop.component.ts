import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'home-main-desktop',
  templateUrl: 'main-desktop.component.html',
  styleUrls: ['main-desktop.component.css'],
})
export class MainDesktopComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('fadeImg') fadeImgs!: QueryList<ElementRef>;
  @ViewChildren('contentCont') contentCont!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;

  constructor() { }
  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //if the el is intersecting with the viewport
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
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
