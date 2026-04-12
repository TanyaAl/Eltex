import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormForAddBlogPost } from './form-for-add-blog-post';

describe('FormForAddBlogPost', () => {
  let component: FormForAddBlogPost;
  let fixture: ComponentFixture<FormForAddBlogPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormForAddBlogPost],
    }).compileComponents();

    fixture = TestBed.createComponent(FormForAddBlogPost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
