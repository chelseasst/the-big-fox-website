import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SignupRoutingModule } from './signup-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmailValidatorDirective } from '../utilis/email-validator.directive';
import { PassCheckDirective } from './signup-utilis/passCheck.directive';

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    RegisterComponent,
    EmailValidatorDirective,
    PassCheckDirective
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SignupModule {}
