import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SignupRoutingModule } from './signup-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { AdminModule } from '../admin/admin.module';
import { UtilisModule } from '../utilis/utilis.module';
@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    SharedModule, AdminModule,
    UtilisModule
  ],

})
export class SignupModule {}
