import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLocationComponent } from './site-location.component';

describe('SiteLocationComponent', () => {
  let component: SiteLocationComponent;
  let fixture: ComponentFixture<SiteLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteLocationComponent]
    });
    fixture = TestBed.createComponent(SiteLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
