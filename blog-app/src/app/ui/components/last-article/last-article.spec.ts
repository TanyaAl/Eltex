import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastArticle } from './last-article';

describe('LastArticle1', () => {
  let component: LastArticle;
  let fixture: ComponentFixture<LastArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastArticle],
    }).compileComponents();

    fixture = TestBed.createComponent(LastArticle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
