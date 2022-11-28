import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniSignupComponent } from './alumni-signup.component';

describe('AlumniSignupComponent', () => {
  let component: AlumniSignupComponent;
  let fixture: ComponentFixture<AlumniSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
