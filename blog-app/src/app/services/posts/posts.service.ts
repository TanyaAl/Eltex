import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlogPostType } from '../../types/BlogPostType';
import { PostsStoreService } from './posts-store.service';
import { PostsServiceInterface } from './posts-service.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService implements PostsServiceInterface {
  private store = inject(PostsStoreService);

  loadPosts(): Observable<BlogPostType[]> {
    if (this.store.postsList().length > 0) {
      return of(this.store.postsList());
    }
    const posts: BlogPostType[] = JSON.parse(localStorage.getItem('posts') || '[]');
    this.store.setPosts(posts);
    return of(posts);
  }

  addPost(post: { category: string; title: string; text: string }): Observable<BlogPostType[]> {
    const todayDate = new Date()
      .toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
      .replace('г', '')
      .replace('.', '');

    const newPost: BlogPostType = {
      id: crypto.randomUUID(),
      category: post.category,
      title: post.title,
      text: post.text,
      date: todayDate,
    };
    const current: BlogPostType[] = this.store.postsList();

    const updated = [...current, newPost];
    localStorage.setItem('posts', JSON.stringify(updated));
    this.store.setPosts(updated);

    return of(updated);
  }

  updatePost(post: BlogPostType): Observable<BlogPostType[]> {
    const current: BlogPostType[] = this.store.postsList();

    const updated = current.map((p: BlogPostType) => (p.id === post.id ? post : p));

    localStorage.setItem('posts', JSON.stringify(updated));
    this.store.setPosts(updated);

    return of(updated);
  }

  getPostById(id: string): BlogPostType | undefined {
    return this.store.postsList().find((p) => p.id === id);
  }

  deletePost(id: string): Observable<BlogPostType[]> {
    const current: BlogPostType[] = this.store.postsList();

    const updated = current.filter((post) => post.id !== id);

    localStorage.setItem('posts', JSON.stringify(updated));
    this.store.setPosts(updated);

    return of(updated);
  }

  getPostsByPage(page: number, pageSize: number): BlogPostType[] {
    const all = this.store.postsList();
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    return all.slice(start, end);
  }

  getTotalPostsCount(): number {
    return this.store.postsList().length;
  }
}
