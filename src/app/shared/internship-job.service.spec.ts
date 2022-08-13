import { TestBed } from '@angular/core/testing';

import { InternshipJobService } from './internship-job.service';

describe('InternshipJobService', () => {
  let service: InternshipJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternshipJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
