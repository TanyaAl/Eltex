/* eslint-disable no-useless-return */
/* eslint-disable import/prefer-default-export */
import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogPostType } from '../../../types/BlogPostType';

@Component({
  selector: 'app-form-for-add-blog-post',
  imports: [ReactiveFormsModule],
  templateUrl: './form-for-add-blog-post.html',
  styleUrl: './form-for-add-blog-post.scss',
})
export class FormForAddBlogPost {
  @Input() isOpen = false;

  @Input() editingPost: BlogPostType | null = null;

  @Output() close = new EventEmitter<void>();

  @Output() save = new EventEmitter<any>();

  protected blogPostForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(25)]),
    text: new FormControl('', Validators.required),
  });

  get title() {
    return this.blogPostForm.get('title');
  }

  get text() {
    return this.blogPostForm.get('text');
  }

  protected onSubmit() {
    if (this.blogPostForm.invalid) return;
    this.save.emit(this.blogPostForm.value);
    this.blogPostForm.reset();
  }

  protected onCancel() {
    this.blogPostForm.reset();
    this.close.emit();
  }

  ngOnChanges() {
    if (this.editingPost) {
      this.blogPostForm.patchValue({
        title: this.editingPost.title,
        text: this.editingPost.text,
      });
    }
  }
}
