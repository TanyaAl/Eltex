/* eslint-disable dot-notation */
/* eslint-disable import/prefer-default-export */
import { Component, input, output } from '@angular/core';
import { BlogPost } from '../blog-post/blog-post';
import { BlogPostType } from '../../../types/BlogPostType';

@Component({
  selector: 'app-blog-posts-container',
  standalone: true,
  imports: [BlogPost],
  templateUrl: './blog-posts-container.html',
  styleUrl: './blog-posts-container.scss',
})
export class BlogPostsContainer {
  blogPosts = input<BlogPostType[]>([]);

  edit = output<string>();

  delete = output<string>();

  protected deletePost(id: string) {
    this.delete.emit(id);
  }

  protected editPost(id: string) {
    this.edit.emit(id);
  }
}
