import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderOnlineService } from 'src/app/order-online/order-online.service';

@Component({
  selector: 'app-form-digital-card',
  templateUrl: './form-digital-card.component.html',
  styleUrls: ['./form-digital-card.component.css'],
})
export class FormDigitalCardComponent {
  isSubmitting: boolean = false;
  message: string = '';
  cardDesigns = [
    { design: 'Simplistic', images: ['assets/gift-cards/design-simple-front.jpg', 'assets/gift-cards/design-simple-back.jpg'] },
    { design: 'Coffee-mood', images: ['assets/gift-cards/design-color-front.jpg', 'assets/gift-cards/design-color-back.jpg'] }
  ];
  constructor(private orderOnlineService: OrderOnlineService) { }
  addToCart(form: NgForm) {
    if (this.isSubmitting) return

    this.isSubmitting = true;
    const image = this.cardDesigns.find(designObj => designObj.design === form.value.design)?.images[0] ?? '';
    this.orderOnlineService.addGiftCardToCart(form, image);
    form.resetForm();
    this.isSubmitting = false
  }
  toggleSelect(selectEl: HTMLSelectElement | HTMLInputElement) {
    selectEl.focus();
  }
}


