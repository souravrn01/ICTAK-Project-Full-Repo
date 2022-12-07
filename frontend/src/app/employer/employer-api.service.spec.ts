import { TestBed } from '@angular/core/testing';

import { EmployerApiService } from './employer-api.service';

describe('EmployerApiService', () => {
  let service: EmployerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
