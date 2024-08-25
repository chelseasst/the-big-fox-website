import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  isClickedD: boolean = true;
  isClickedB: boolean = false;

  toggleClickedDrinks() {
    this.isClickedD = true;
    this.isClickedB = false;
  }
  toggleClickedBakery() {
    this.isClickedB = true;
    this.isClickedD = false;
  }
}
