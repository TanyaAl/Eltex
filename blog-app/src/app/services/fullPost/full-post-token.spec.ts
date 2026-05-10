import { TestBed } from '@angular/core/testing';

import { FullPostToken } from './full-post-token';

describe('FullPostToken', () => {
  let service: FullPostToken;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullPostToken);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
