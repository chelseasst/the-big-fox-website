import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit, OnDestroy {
  userName: string | null = null;
  isAdmin: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(private userService: UserService) { }
  
  async ngOnInit() {
    this.userService.user$
    .pipe(takeUntil(this.destroy$))
    .subscribe(async (user) => {
      this.userName = user?.userName || null;
      this.isAdmin = !!user ? await this.userService.isAdmin() : false;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  logout(): void {
    this.userService.logout();
  }
}
