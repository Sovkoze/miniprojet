import { TestBed } from '@angular/core/testing';

import { AbscenceService } from './abscence.service';

describe('AbscenceService', () => {
  let service: AbscenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbscenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
