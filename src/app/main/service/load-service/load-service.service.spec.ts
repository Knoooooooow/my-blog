import { TestBed } from '@angular/core/testing';

import { LoadServiceService } from './load-service.service';

describe('LoadServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadServiceService = TestBed.get(LoadServiceService);
    expect(service).toBeTruthy();
  });
});
