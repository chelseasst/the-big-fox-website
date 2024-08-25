import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDigitalCardComponent } from './form-digital-card.component';

describe('FormDigitalCardComponent', () => {
  let component: FormDigitalCardComponent;
  let fixture: ComponentFixture<FormDigitalCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDigitalCardComponent],
    });
    fixture = TestBed.createComponent(FormDigitalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
