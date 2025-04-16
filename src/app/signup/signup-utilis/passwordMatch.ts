import { ValidatorFn } from '@angular/forms';

export function passwordsMatchValidator(
  passControlName: string,
  rePassControlName: string
): ValidatorFn {
  return function (control) {
    const pass = control.get(passControlName);
    const rePass = control.get(rePassControlName);
    if (pass?.value !== rePass?.value) {
      return { notMatching: true };
    }
    return null;
  };
}
