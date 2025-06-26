import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuItemComponent } from './add-menu-item.component';

describe('AddMenuItemComponent', () => {
  let component: AddMenuItemComponent;
  let fixture: ComponentFixture<AddMenuItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMenuItemComponent]
    });
    fixture = TestBed.createComponent(AddMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
