import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOnlineCakesComponent } from './order-online-cakes.component';

describe('OrderOnlineCakesComponent', () => {
  let component: OrderOnlineCakesComponent;
  let fixture: ComponentFixture<OrderOnlineCakesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderOnlineCakesComponent]
    });
    fixture = TestBed.createComponent(OrderOnlineCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
