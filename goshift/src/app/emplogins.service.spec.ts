import { TestBed } from '@angular/core/testing';

import { EmploginsService } from './emplogins.service';

describe('EmploginsService', () => {
  let service: EmploginsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploginsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
