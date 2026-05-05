import { Injectable, signal } from '@angular/core';
import { BlogPostType } from '../../types/BlogPostType';

@Injectable()
export class PostsStoreService {
  postsList = signal<BlogPostType[]>([]);

  currentPage = signal<number>(1);

  pageSize = signal<number>(7);

  totalCount = signal<number>(0);

  editingPost = signal<BlogPostType | null>(null);

  setPosts(posts: BlogPostType[]): void {
    this.postsList.set(posts);
  }

  setCurrentPage(page: number): void {
    this.currentPage.set(page);
  }

  setTotalCount(count: number): void {
    this.totalCount.set(count);
  }
}
