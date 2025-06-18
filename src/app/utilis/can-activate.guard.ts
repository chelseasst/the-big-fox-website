import { Injectable } from '@angular/core';
import {
  CanActivate,
} from '@angular/router';
import { MenuNavService } from '../core/header/site-header-mobile/menu-nav.service';

@Injectable({ providedIn: 'root' })
export class MenuNavGuard implements CanActivate {
  constructor(private menuNavService: MenuNavService) { }
  canActivate(): boolean {
    this.menuNavService.closeMenu();
    return true;
  }
}
