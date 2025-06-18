import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  message: string = '';
  constructor(private userService: UserService) { }
  async registerHandler(form: NgForm) {
    if (form.valid) {
      const data = {
        firstName: form.value.firstName,
        email: form.value.email,
        password: form.value.password,
        rePassword: form.value.rePassword
      }
      this.message = await this.userService.register(data);
    }
  }
}

