import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBakeryComponent } from './menu-bakery.component';

describe('MenuBakeryComponent', () => {
  let component: MenuBakeryComponent;
  let fixture: ComponentFixture<MenuBakeryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuBakeryComponent]
    });
    fixture = TestBed.createComponent(MenuBakeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
