import { TestBed } from '@angular/core/testing';

import { ConsumeWhetherService } from './consume-whether.service';

describe('ConsumeWhetherService', () => {
  let service: ConsumeWhetherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumeWhetherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
