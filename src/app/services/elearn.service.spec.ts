import { TestBed } from '@angular/core/testing';

import { ElearnService } from './elearn.service';

describe('ElearnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElearnService = TestBed.get(ElearnService);
    expect(service).toBeTruthy();
  });
});
