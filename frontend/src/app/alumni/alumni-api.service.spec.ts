import { TestBed } from '@angular/core/testing';

import { AlumniApiService } from './alumni-api.service';

describe('AlumniApiService', () => {
  let service: AlumniApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumniApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
