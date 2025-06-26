import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { itemDetails } from 'src/app/types/itemDetails';
import { OrderOnlineService } from '../order-online.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  quantityValue: number = 1;
  itemDetails!: itemDetails | undefined;
  imgId: number = 0;
  isPopupOpen$ = this.orderOnlineService.isCartPopupOpen$;
  showQuantRange: boolean = false;
  message: string = '';
  readonly MIN_VALUE: number = 1;
  readonly MAX_VALUE: number = 5;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private orderOnlineService: OrderOnlineService
  ) { }

  ngOnInit(): void {
    const slug = this.activatedRoute.snapshot.params['slug'];
    const url = this.router.url;
    if (url.includes('store')) {
      this.getItem(slug, 'food');
    } else {
      this.getItem(slug, 'merch');
    }
  }
  async getItem(slug: string, collection: string) {
    const data = await this.orderOnlineService.getItemById(slug, collection);
    if (data && "message" in data) {
      this.message = data.message;
    } else if (data) {
      this.itemDetails = data;
    } else {
      this.message = "Unexpected response format.";
    }
  }
  addToCart(quantity: string) {
    console.log('item details',JSON.stringify(this.itemDetails));
    if (this.itemDetails) {
      this.orderOnlineService.addItemToCart(this.itemDetails, parseInt(quantity));
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
}