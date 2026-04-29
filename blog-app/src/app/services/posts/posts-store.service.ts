import { Injectable, signal } from '@angular/core';
import { BlogPostType } from '../../types/BlogPostType';

@Injectable({
  providedIn: 'root',
})
export class PostsStoreService {
  postsList = signal<BlogPostType[]>([]);

  currentPage = signal<number>(1);
}
