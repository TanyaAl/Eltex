/* eslint-disable dot-notation */
/* eslint-disable import/prefer-default-export */
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { SimpleChanges } from '@angular/core';
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
  @Input() blogPosts: BlogPostType[] = [];

  @Output() countChange = new EventEmitter<number>();

  @Output() edit = new EventEmitter<string>();

  private emitCount() {
    this.countChange.emit(this.blogPosts.length);
  }

  protected ngOnInit() {
    this.emitCount();
  }

  protected ngOnChanges(changes: SimpleChanges) {
    if (changes['blogPosts']) {
      this.emitCount();
    }
  }

  protected deletePost(id: string) {
    this.blogPosts = this.blogPosts.filter((post) => post.id !== id);
    this.emitCount();
  }

  protected editPost(id: string) {
    this.edit.emit(id);
  }
}
