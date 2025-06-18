import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate{
    constructor(private router: Router) {}
    canActivate(): boolean {
        if (localStorage.getItem("userToken")) {
          return true;
        } else {
            setTimeout(() => {
                this.router.navigate(['/signup']); 
              }, 0);
          return false;
        }
      }
  }