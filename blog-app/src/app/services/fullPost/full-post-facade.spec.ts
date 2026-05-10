import { TestBed } from '@angular/core/testing';

import { FullPostFacade } from './full-post-facade';

describe('FullPostFacade', () => {
  let service: FullPostFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullPostFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
