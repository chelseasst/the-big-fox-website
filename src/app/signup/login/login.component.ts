import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string = '';
  constructor(private userService: UserService) { }
  async loginHandler(form: NgForm) {
    console.log('FORM',form);
    if (form.valid) {
      const data = {
        email: form.value.email,
        password: form.value.password
      }
      this.message = await this.userService.login(data);
    }
  }
}
