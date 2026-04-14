/* eslint-disable import/prefer-default-export */
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-for-add-blog-post',
  imports: [],
  templateUrl: './form-for-add-blog-post.html',
  styleUrl: './form-for-add-blog-post.scss',
})
export class FormForAddBlogPost {
  @Input() isOpen = false;

  @Output() close = new EventEmitter<void>();
}
