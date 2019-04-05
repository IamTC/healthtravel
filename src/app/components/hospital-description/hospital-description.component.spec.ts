import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalDescriptionComponent } from './hospital-description.component';

describe('HospitalDescriptionComponent', () => {
  let component: HospitalDescriptionComponent;
  let fixture: ComponentFixture<HospitalDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
