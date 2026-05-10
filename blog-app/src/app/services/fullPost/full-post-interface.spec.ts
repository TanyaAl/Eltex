import { TestBed } from '@angular/core/testing';

import { FullPostInterface } from './full-post-interface';

describe('FullPostInterface', () => {
  let service: FullPostInterface;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullPostInterface);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
