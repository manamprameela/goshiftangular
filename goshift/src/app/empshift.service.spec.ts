import { TestBed } from '@angular/core/testing';

import { EmpshiftService } from './empshift.service';

describe('EmpshiftService', () => {
  let service: EmpshiftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpshiftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
