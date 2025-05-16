import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";


@Directive({
    selector: '[appPassMatching]',
    providers: [{ provide: NG_VALIDATORS, useExisting: AppPassMatchingDirective, multi: true }]
})
export class AppPassMatchingDirective implements Validator {
    validate(control: AbstractControl<any>): ValidationErrors | null {
        const pass = control.parent?.get('password')?.value;
        const rePass = control.parent?.get('rePassword')?.value;
        if (!pass || !rePass) { return null }
        return pass === rePass ? null : { appPassMatching: true }
    }
}