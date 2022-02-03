import { TestBed } from '@angular/core/testing';

import { EmpregisterService } from './empregister.service';

describe('EmpregisterService', () => {
  let service: EmpregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
