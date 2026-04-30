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

  addPost(post: { title: string; text: string }): Observable<BlogPostType[]> {
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
      category: 'general',
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

  getPostById(id: string): Observable<BlogPostType | undefined> {
    const post = this.store.postsList().find((p) => p.id === id);

    return of(post);
  }

  deletePost(id: string): Observable<BlogPostType[]> {
    const current: BlogPostType[] = this.store.postsList();

    const updated = current.filter((post) => post.id !== id);

    localStorage.setItem('posts', JSON.stringify(updated));
    this.store.setPosts(updated);

    return of(updated);
  }

  getPostsByPage(page: number, pageSize: number): Observable<BlogPostType[]> {
    const all = this.store.postsList();
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    return of(all.slice(start, end));
  }

  getTotalPostsCount(): Observable<number> {
    return of(this.store.postsList().length);
  }
}
