import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class HeaderComponent {
  isDesktop: boolean = false;
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 1000px)']) //condition
      .subscribe((result) => {
        // { matches: false, breakpoints:{ (max-width: 1000px) : false} }
        this.isDesktop = !result.matches;
        //if the condition matches => true
      });
  }
}
