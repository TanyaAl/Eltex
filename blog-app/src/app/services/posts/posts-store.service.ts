import { Injectable, signal } from '@angular/core';
import { BlogPostType } from '../../types/BlogPostType';

@Injectable({
  providedIn: 'root',
})
export class PostsStoreService {
  postsList = signal<BlogPostType[]>([]);

  currentPage = signal<number>(1);

  pageSize = signal<number>(7);

  setPosts(posts: BlogPostType[]): void {
    this.postsList.set(posts);
  }

  setCurrentPage(page: number): void {
    this.currentPage.set(page);
  }
}
