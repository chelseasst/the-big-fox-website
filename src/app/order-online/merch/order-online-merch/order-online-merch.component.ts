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
  constructor(private breakpointObserver: BreakpointObserver, private orderOnlineService: OrderOnlineService) { }
  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((result) => {
        this.isDesktop = !result.matches;
      });

    //fetch data TODO
  }
}
