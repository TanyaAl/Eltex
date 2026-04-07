import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastArticle2 } from './last-article-2';

describe('LastArticle2', () => {
  let component: LastArticle2;
  let fixture: ComponentFixture<LastArticle2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastArticle2],
    }).compileComponents();

    fixture = TestBed.createComponent(LastArticle2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
