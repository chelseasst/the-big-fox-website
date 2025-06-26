import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { itemDetails } from 'src/app/types/itemDetails';
import { OrderOnlineService } from '../../order-online.service';

@Component({
  selector: 'app-order-online-merch',
  templateUrl: './order-online-merch.component.html',
  styleUrls: ['./order-online-merch.component.css']
})
export class OrderOnlineMerchComponent implements OnInit {
  isDesktop: boolean = false;
  items!: itemDetails[];
  message: string = '';
  constructor(private breakpointObserver: BreakpointObserver, private orderOnlineService: OrderOnlineService) { }
  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((result) => {
        this.isDesktop = !result.matches;
      });
    this.getItems();
    //fetch data TODO
  }

  async getItems() {
    const data = await this.orderOnlineService.getMerchItems();
    if (Array.isArray(data)) {
      this.items = data;
    } else if (data && "message" in data) {
      this.message = data.message;
    } else {
      this.message = "Unexpected response format.";
    }
  }
}
