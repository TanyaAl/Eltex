import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesContainer } from './articles-container';

describe('ArticlesContainer', () => {
  let component: ArticlesContainer;
  let fixture: ComponentFixture<ArticlesContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticlesContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
