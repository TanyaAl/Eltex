import { TestBed } from '@angular/core/testing';

import { PostsServiceInterface } from './posts-service.interface';

describe('PostsServiceInterface', () => {
  let service: PostsServiceInterface;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsServiceInterface);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
