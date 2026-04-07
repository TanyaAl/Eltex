import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastArticle1 } from './last-article-1';

describe('LastArticle1', () => {
  let component: LastArticle1;
  let fixture: ComponentFixture<LastArticle1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastArticle1],
    }).compileComponents();

    fixture = TestBed.createComponent(LastArticle1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
