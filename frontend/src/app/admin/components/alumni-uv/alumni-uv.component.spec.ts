import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniUVComponent } from './alumni-uv.component';

describe('AlumniUVComponent', () => {
  let component: AlumniUVComponent;
  let fixture: ComponentFixture<AlumniUVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniUVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniUVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
