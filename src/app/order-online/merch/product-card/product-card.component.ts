import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { itemDetails } from 'src/app/types/itemDetails';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('item') item!: itemDetails;
  @ViewChild('sliderWrapper') sliderWrapper!: ElementRef;
  currentIndex = 0;
  currentPosition = 0;
  addToCart(id: string) {

  }
  prevImg() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.scroll('left');
    }

  }
  nextImg() {
    if (this.currentIndex < this.item.images.length - 1) {
      this.currentIndex++;
      this.scroll('right');
    }

  }
  scroll(side: string) {
    const wrapper = this.sliderWrapper.nativeElement;
    const imageWidth = this.sliderWrapper.nativeElement.querySelector('img').clientWidth;
    this.currentPosition = side === 'right' ? this.currentPosition + imageWidth : this.currentPosition - imageWidth
    wrapper.scrollTo({
      left: this.currentPosition,
    })
  }
}
