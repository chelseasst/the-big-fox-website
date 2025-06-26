import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderOnlineService } from 'src/app/order-online/order-online.service';

@Component({
  selector: 'app-form-physical-card',
  templateUrl: './form-physical-card.component.html',
  styleUrls: ['./form-physical-card.component.css']
})
export class FormPhysicalCardComponent {
  // TODO fetch the data
  cardDesigns = [
    { title: 'Simplistic', images: ['assets/gift-cards/design-simple-front.jpg', 'assets/gift-cards/design-simple-back.jpg'] },
    { title: 'Coffee mood', images: ['assets/gift-cards/design-color-front.jpg', 'assets/gift-cards/design-color-back.jpg'] }
  ]
  constructor(private orderOnlineService: OrderOnlineService) { }
  toggleSelect(selectEl: HTMLSelectElement) {
    selectEl.focus();
  }
  addToCart(form: NgForm) {
    const formData = form.value;
    const selectedDesign = this.cardDesigns.find(design => design.title === formData.design);
    const item = {
      slug: `gift-card-${formData.design}`,
      title: `Gift Card ${formData.design}`,
      price: formData.amount,
      pieces: 1,
      quantity: 1,
      description:'',
      fullDescription:'',
      images: selectedDesign ? selectedDesign.images : [],
      giftCard: {
        design: formData.design,
        amount: formData.amount,
        recipName: formData.recipName,
        recipEmail: formData.recipEmail,
        recipAdress: formData.recipAddress,
        recipAdress2: formData.recipAdress2,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        country: formData.country,
        deliveryDate: formData.deliveryDate,
        senderName: formData.senderName,
        senderEmail: formData.senderEmail,
        message: formData.email,
      }
    }
    this.orderOnlineService.addItemToCart(item, 1);
  }
}








