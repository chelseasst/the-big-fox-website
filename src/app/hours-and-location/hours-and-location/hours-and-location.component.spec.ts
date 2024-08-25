import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursAndLocationComponent } from './hours-and-location.component';

describe('HoursAndLocationComponent', () => {
  let component: HoursAndLocationComponent;
  let fixture: ComponentFixture<HoursAndLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoursAndLocationComponent]
    });
    fixture = TestBed.createComponent(HoursAndLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
