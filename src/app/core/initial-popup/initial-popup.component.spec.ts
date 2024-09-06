import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPopupComponent } from './initial-popup.component';

describe('InitialPopupComponent', () => {
  let component: InitialPopupComponent;
  let fixture: ComponentFixture<InitialPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InitialPopupComponent]
    });
    fixture = TestBed.createComponent(InitialPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
