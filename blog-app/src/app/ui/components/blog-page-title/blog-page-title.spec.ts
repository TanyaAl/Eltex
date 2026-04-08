import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPageTitle } from './blog-page-title';

describe('BlogPageTitle', () => {
  let component: BlogPageTitle;
  let fixture: ComponentFixture<BlogPageTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPageTitle],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogPageTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
