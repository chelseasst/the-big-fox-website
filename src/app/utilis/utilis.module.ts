import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidatorDirective } from './email-validator.directive';
import { AppPasswordDirective } from './password.directive';
import { AppPassMatchingDirective } from './passMatching.directive';



@NgModule({
  declarations: [EmailValidatorDirective,AppPasswordDirective, AppPassMatchingDirective],
  imports: [
    CommonModule
  ],
  exports:[EmailValidatorDirective,AppPasswordDirective, AppPassMatchingDirective]
})
export class UtilisModule { }
