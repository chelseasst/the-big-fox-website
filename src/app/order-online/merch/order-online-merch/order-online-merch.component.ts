import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { itemDetails } from 'src/app/types/itemDetails';
import { OrderOnlineService } from '../../order-online.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-order-online-merch',
  templateUrl: './order-online-merch.component.html',
  styleUrls: ['./order-online-merch.component.css']
})
export class OrderOnlineMerchComponent implements OnInit, OnDestroy {
  isDesktop: boolean = false;
  items!: itemDetails[];
  message: string = '';
  private destroy$ = new Subject<void>();

  constructor(private breakpointObserver: BreakpointObserver, private orderOnlineService: OrderOnlineService) { }
  
  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.isDesktop = !result.matches;
      });
    this.getItems();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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
