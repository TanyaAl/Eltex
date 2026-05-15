import { TestBed } from '@angular/core/testing';

import { CategoriesInterface } from './categories-interface';

describe('CategoriesInterface', () => {
  let service: CategoriesInterface;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesInterface);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
