import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniHeaderComponent } from './alumni-header.component';

describe('AlumniHeaderComponent', () => {
  let component: AlumniHeaderComponent;
  let fixture: ComponentFixture<AlumniHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
