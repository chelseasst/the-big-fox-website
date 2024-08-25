import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'home-main-desktop',
  templateUrl: 'main-desktop.component.html',
  styleUrls: ['main-desktop.component.css'],
})
export class MainDesktopComponent implements AfterViewInit {
  @ViewChildren('fadeImg') fadeImgs!: QueryList<ElementRef>;
  @ViewChildren('contentContainer') contentContainer!: QueryList<ElementRef>;

  constructor() {}
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
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
      observer.observe(el.nativeElement);
    });
    this.contentContainer.forEach((el) => {
      observer.observe(el.nativeElement);
    });
  }
}
