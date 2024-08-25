import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPhysicalCardComponent } from './form-physical-card.component';

describe('FormPhysicalCardComponent', () => {
  let component: FormPhysicalCardComponent;
  let fixture: ComponentFixture<FormPhysicalCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPhysicalCardComponent]
    });
    fixture = TestBed.createComponent(FormPhysicalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
