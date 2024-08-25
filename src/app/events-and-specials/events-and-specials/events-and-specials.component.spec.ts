import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsAndSpecialsComponent } from './events-and-specials.component';

describe('EventsAndSpecialsComponent', () => {
  let component: EventsAndSpecialsComponent;
  let fixture: ComponentFixture<EventsAndSpecialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsAndSpecialsComponent]
    });
    fixture = TestBed.createComponent(EventsAndSpecialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
