import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[emailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective implements Validator {
  @Input('emailValidator') customValidator: string | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    const isValid =
      control.value?.endsWith('.com') || control.value?.endsWith('.bg');
    if (!isValid) {
      return {
        invalidExtension: true,
      };
    }
    return null;
  }
}
