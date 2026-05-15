import { TestBed } from '@angular/core/testing';

import { FullPostApiService } from './full-post-api-service';

describe('FullPostApiService', () => {
  let service: FullPostApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullPostApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
