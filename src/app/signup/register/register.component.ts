import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordsMatchValidator } from '../signup-utilis/passwordMatch';
import { passCheck } from '../signup-utilis/passCheck';
import { emailValidator } from '../../utilis/email-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(4)]],
    lastName: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email, emailValidator()]],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required, passCheck()]],
        rePassword: ['', [Validators.required, passCheck()]],
      },
      { validators: [passwordsMatchValidator('password', 'rePassword')] }
    ),
  });
  checkError(controlName: string, errorType: string): boolean {
    const control = this.registerForm.get(controlName);
    return control?.errors?.[errorType];
  }
  registerHandler() {}
  constructor(private fb: FormBuilder) {}
}
