import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// export function passCheck(controlName:string): ValidatorFn {
//   const regExp = /^(?=.*[A-Z])(?=.*\d.*\d)[A-Za-z\d]{7,}$/;
//   return (control) =>{

//     if (control.value && regExp.test(control.value)) {
//       console.log(control.value,'valid');
//       return null
//     }
//     console.log(control.value, 'not Valid');
//     return { passNotValid: true };
//   };
// }
export function passCheck(): ValidatorFn {
  const regExp = /^(?=.*[A-Z])(?=.*\d.*\d)[A-Za-z\d]{7,}$/;
  return function (control) {
    if (control.value && regExp.test(control.value)) {
      // console.log(control.value, 'valid');
      return null;
    }
    // console.log(control.value, 'not Valid');
    return { passNotValid: true };
  };
}
