import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementcompaniesComponent } from './placementcompanies.component';

describe('PlacementcompaniesComponent', () => {
  let component: PlacementcompaniesComponent;
  let fixture: ComponentFixture<PlacementcompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementcompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementcompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
