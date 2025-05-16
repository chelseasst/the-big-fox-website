import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  isClickedD: boolean = true;
  isClickedB: boolean = false;
  previousScrollY = window.scrollY; // Store the last scroll position
  toggleClickedDrinks() {
    this.isClickedD = true;
    this.isClickedB = false;
  }
  toggleClickedBakery() {
    this.isClickedB = true;
    this.isClickedD = false;
  }
}
