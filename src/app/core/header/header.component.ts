import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class HeaderComponent {
  isDesktop: boolean = false;
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 999px)'])
      .subscribe((result) => {
        this.isDesktop = !result.matches;
        //returns true if matching the condition
        //return false if not matching the condition -> desktop
      });
  }
}
