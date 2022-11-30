import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeSignupComponent } from './employe-signup.component';

describe('EmployeSignupComponent', () => {
  let component: EmployeSignupComponent;
  let fixture: ComponentFixture<EmployeSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
