import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPopupComponent } from './products-popup.component';

describe('ProductsPopupComponent', () => {
  let component: ProductsPopupComponent;
  let fixture: ComponentFixture<ProductsPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsPopupComponent]
    });
    fixture = TestBed.createComponent(ProductsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
