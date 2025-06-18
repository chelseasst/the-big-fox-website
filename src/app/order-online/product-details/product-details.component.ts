import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { itemDetails } from 'src/app/types/itemDetails';
import { OrderOnlineService } from '../order-online.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  quantityValue: number = 1;
  itemDetails!: itemDetails | undefined;
  imgId: number = 0;
  // isPopupOpen$ = this.orderOnlineService.isPopupOpen$;
  showQuantRange: boolean = false;
  message: string = '';
  readonly MIN_VALUE: number = 1;
  readonly MAX_VALUE: number = 5;


  constructor(
    private activatedRoute: ActivatedRoute,
    private orderOnlineService: OrderOnlineService
  ) { }

  ngOnInit(): void {
    const slug = this.activatedRoute.snapshot.params['slug'];
    // this.getItem(slug);
    console.log('Slug', slug)
  }
  async getItem(slug: string) {
    const data = await this.orderOnlineService.getItemById(slug);
    if (data && "message" in data) {
      this.message = data.message;
    } else if (data) {
      this.itemDetails = data;
    } else {
      this.message = "Unexpected response format.";
    }
  }
  increment() {
    if (this.quantityValue < this.MAX_VALUE) {
      this.quantityValue++;
      this.showQuantRange = false;
    } else {
      this.showQuantRange = true;
    }
  }
  decrement() {
    if (this.quantityValue > this.MIN_VALUE) {
      this.quantityValue--;
      this.showQuantRange = false;
    } else {
      this.showQuantRange = true;
    }
  }
  changeImg(id: number) {
    if (!isNaN(id)) {
      this.imgId = id;
    }
  }
  addToCart(quantity: string) {
    // const item = {
    //   slug: this.itemDetails.slug,
    //   title: this.itemDetails.title,
    //   price: this.itemDetails.price,
    //   pieces: this.itemDetails.pieces,
    //   color: this.itemDetails.color || undefined,
    //   quantity: parseInt(quantity),
    //   images: this.itemDetails.images
    // }
    // this.orderOnlineService.addItemToCart(item, quantity);
  }
}