import { ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  return (control) => {
    const isValid =
      control.value?.endsWith('.com') || control.value?.endsWith('.bg');
    if (!isValid) {
      return {
        invalidExtension: true,
      };
    }
    return null;
  };
}
