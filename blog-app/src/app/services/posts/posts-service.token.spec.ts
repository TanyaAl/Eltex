import { TestBed } from '@angular/core/testing';

import { PostsServiceToken } from './posts-service.token';

describe('PostsServiceToken', () => {
  let service: PostsServiceToken;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsServiceToken);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
