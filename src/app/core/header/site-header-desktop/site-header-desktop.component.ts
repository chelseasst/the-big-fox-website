import { Component } from '@angular/core';

@Component({
  selector: 'site-header-desktop',
  templateUrl: 'site-header-desktop.component.html',
  styleUrls: ['site-header-desktop.component.css'],
})
export class SiteHeaderDesktopComponent {
  isSubMenuShown: boolean = false;
  constructor() {}
  toggleSubmenu() {
    this.isSubMenuShown = !this.isSubMenuShown;
  }
}
