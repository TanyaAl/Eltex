/* eslint-disable no-useless-return */
/* eslint-disable import/prefer-default-export */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-for-add-blog-post',
  imports: [ReactiveFormsModule],
  templateUrl: './form-for-add-blog-post.html',
  styleUrl: './form-for-add-blog-post.scss',
})
export class FormForAddBlogPost {
  @Input() isOpen = false;

  @Output() close = new EventEmitter<void>();

  @Output() save = new EventEmitter<any>();

  blogPostForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(25)]),
    text: new FormControl('', Validators.required),
  });

  get title() {
    return this.blogPostForm.get('title');
  }

  get text() {
    return this.blogPostForm.get('text');
  }

  onSubmit() {
    if (this.blogPostForm.invalid) return;
    this.save.emit(this.blogPostForm.value);
    console.log(this.blogPostForm.value);
    this.blogPostForm.reset();
  }

  onCancel() {
    this.blogPostForm.reset();
    this.close.emit();
  }
}
