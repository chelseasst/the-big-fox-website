import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[passCheck]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PassCheckDirective,
      multi: true,
    },
  ],
})
export class PassCheckDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const regExp = /^(?=.*[A-Z])(?=.*\d.*\d)[A-Za-z\d]{7,}$/;
    if (control.value && regExp.test(control.value)) {
      return null;
    }
    return { passNotValid: true };
  }
}
