import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOnlineStoreComponent } from './order-online-store.component';

describe('OrderOnlineComponent', () => {
  let component: OrderOnlineStoreComponent;
  let fixture: ComponentFixture<OrderOnlineStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderOnlineStoreComponent],
    });
    fixture = TestBed.createComponent(OrderOnlineStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
