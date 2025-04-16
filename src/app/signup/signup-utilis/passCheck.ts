import { ValidatorFn } from '@angular/forms';
export function passCheck(): ValidatorFn {
  const regExp = /^(?=.*[A-Z])(?=.*\d.*\d)[A-Za-z\d]{7,}$/;
  return function (control) {
    if (control.value && regExp.test(control.value)) {
      return null;
    }
    return { passNotValid: true };
  };
}
