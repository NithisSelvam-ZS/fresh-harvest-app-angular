import { TestBed } from '@angular/core/testing';

import { PromationService } from './promation.service';

describe('PromationService', () => {
  let service: PromationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
