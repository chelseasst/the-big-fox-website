import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
  isDesktop: boolean = false;
  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((result) => {
        this.isDesktop = !result.matches;
      });
  }
}
