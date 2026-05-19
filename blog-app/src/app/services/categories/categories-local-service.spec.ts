import { TestBed } from '@angular/core/testing';

import { CategoriesLocalService } from './categories-local-service';

describe('CategoriesLocalService', () => {
  let service: CategoriesLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
