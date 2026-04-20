/* eslint-disable import/prefer-default-export */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BlogPostType } from '../../../types/BlogPostType';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.scss',
})
export class BlogPost {
  @Input() blogPost!: BlogPostType;

  @Output() delete = new EventEmitter<string>();

  protected onDelete() {
    this.delete.emit(this.blogPost.id);
  }
}
