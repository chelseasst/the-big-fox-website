import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-digital-card',
  templateUrl: './form-digital-card.component.html',
  styleUrls: ['./form-digital-card.component.css'],
})
export class FormDigitalCardComponent {
  cardDesigns = [
    { title: 'Simplistic', images: ['assets/gift-cards/design-simple-front.jpg', 'assets/gift-cards/design-simple-back.jpg'] },
    { title: 'Coffee mood', images: ['assets/gift-cards/design-color-front.jpg', 'assets/gift-cards/design-color-back.jpg'] }
  ]
  constructor() { }
  isChecked:boolean = false;
  addToCart(form: NgForm) {

  }
  toggleSelect(selectEl: HTMLSelectElement | HTMLInputElement) {
    selectEl.focus();
  }
}
