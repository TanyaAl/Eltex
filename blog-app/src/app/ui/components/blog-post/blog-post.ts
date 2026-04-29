/* eslint-disable import/prefer-default-export */
import { Component, input, output } from '@angular/core';
import { BlogPostType } from '../../../types/BlogPostType';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.scss',
})
export class BlogPost {
  blogPost = input.required<BlogPostType>();

  delete = output<string>();

  edit = output<string>();

  protected onDelete() {
    console.log('ONDELETE');
    this.delete.emit(this.blogPost().id);
  }

  protected onEdit() {
    this.edit.emit(this.blogPost().id);
  }
}
