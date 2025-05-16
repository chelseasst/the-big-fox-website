import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'home-main-mobile',
  templateUrl: 'main-mobile.component.html',
  styleUrls: ['main-mobile.component.css'],
})
export class MainMobileComponent implements AfterViewInit {
  @ViewChildren('fadeImg') fadeImgs!: QueryList<ElementRef>; //just a wrapper around the actual DOM el
  @ViewChildren('contentCont') contentCont!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); //so that it animates again
        }
      })
    });
    this.fadeImgs.forEach((el) => {
      observer.observe(el.nativeElement);
    });
    this.contentCont.forEach((el) => {
      observer.observe(el.nativeElement);
    });
  }
}
