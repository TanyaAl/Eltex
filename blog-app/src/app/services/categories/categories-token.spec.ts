import { TestBed } from '@angular/core/testing';

import { CategoriesToken } from './categories-token';

describe('CategoriesToken', () => {
  let service: CategoriesToken;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesToken);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
