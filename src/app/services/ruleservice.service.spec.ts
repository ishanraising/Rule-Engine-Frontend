import { TestBed } from '@angular/core/testing';

import { RuleserviceService } from './ruleservice.service';

describe('RuleserviceService', () => {
  let service: RuleserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuleserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
