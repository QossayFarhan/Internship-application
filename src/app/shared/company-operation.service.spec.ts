import { TestBed } from '@angular/core/testing';

import { CompanyOperationService } from './company-operation.service';

describe('CompanyOperationService', () => {
  let service: CompanyOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
