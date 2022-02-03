import { TestBed } from '@angular/core/testing';

import { AdminloginsService } from './adminlogins.service';

describe('AdminloginsService', () => {
  let service: AdminloginsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminloginsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
