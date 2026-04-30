import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationBtns } from './pagination-btns';

describe('PaginationBtns', () => {
  let component: PaginationBtns;
  let fixture: ComponentFixture<PaginationBtns>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationBtns],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationBtns);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
