import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  userName: string | null = null;
  isAdmin: boolean = false;
  constructor(private userService: UserService) { }
  async ngOnInit() {
    this.userService.user$.subscribe((user) => {
      this.userName = user?.userName || null;
    });
    this.isAdmin = await this.userService.isAdmin();
  }
  logout(): void {
    this.userService.logout();
  }
}
