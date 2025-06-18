import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
@Directive({
    selector: '[appPassword]',
    providers: [{ provide: NG_VALIDATORS, useExisting: AppPasswordDirective, multi: true }]
})
export class AppPasswordDirective implements Validator {
    validate(control: AbstractControl<any>): ValidationErrors | null {
        const pass = control.value;
        if (!pass) { return null }
        const hasUpperCase = /[A-Z]/.test(pass);
        return hasUpperCase ? null : {
            appPassword: true
        }
    }
}