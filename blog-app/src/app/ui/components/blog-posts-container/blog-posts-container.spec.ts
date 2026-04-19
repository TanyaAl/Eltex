import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostsContainer } from './blog-posts-container';

describe('BlogPostContainer', () => {
  let component: BlogPostsContainer;
  let fixture: ComponentFixture<BlogPostsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPostsContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogPostsContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
