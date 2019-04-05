import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalMealComponent } from './hospital-meal.component';

describe('HospitalMealComponent', () => {
  let component: HospitalMealComponent;
  let fixture: ComponentFixture<HospitalMealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalMealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
