import { TestBed } from '@angular/core/testing';

import { FullPostStore } from './full-post-store';

describe('FullPostStore', () => {
  let service: FullPostStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullPostStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
