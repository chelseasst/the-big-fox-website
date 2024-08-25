import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/utilis/email-validator';

@Component({
  selector: 'app-form-digital-card',
  templateUrl: './form-digital-card.component.html',
  styleUrls: ['./form-digital-card.component.css'],
})
export class FormDigitalCardComponent {
  digitalForm = this.formBuilder.group({
    amountSelect: ['', [Validators.required]],
    recipientName: ['', [Validators.required, Validators.minLength(4)]],
    recipientEmail: [
      '',
      [Validators.required, Validators.email, emailValidator()],
    ],
    dateInput: ['', []],
    emailCheckbox: ['', []],
    yourNameInput: ['', [Validators.required, Validators.minLength(4)]],
    yourEmailInput: [
      '',
      [Validators.required, Validators.email, emailValidator()],
    ],
    yourMessageTextA: ['', []],
  });
  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {}

  toggleSelect(selectEl: HTMLSelectElement | HTMLInputElement) {
    selectEl.focus();
  }
  checkError(controlName: string, errorType: string): boolean {
    const control = this.digitalForm.get(controlName);
    console.log(errorType, control, control?.errors);
    return control?.errors?.[errorType];
  }
}
