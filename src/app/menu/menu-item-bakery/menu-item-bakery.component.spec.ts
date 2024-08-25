import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemBakeryComponent } from './menu-item-bakery.component';

describe('MenuItemBakeryComponent', () => {
  let component: MenuItemBakeryComponent;
  let fixture: ComponentFixture<MenuItemBakeryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuItemBakeryComponent]
    });
    fixture = TestBed.createComponent(MenuItemBakeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
