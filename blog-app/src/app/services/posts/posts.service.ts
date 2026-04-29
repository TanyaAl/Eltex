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
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    this.store.postsList.set(posts);
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
    const current = JSON.parse(localStorage.getItem('posts') || '[]');

    const updated = [...current, newPost];
    localStorage.setItem('posts', JSON.stringify(updated));
    this.store.postsList.set(updated);

    return of(updated);
  }

  updatePost(post: BlogPostType): Observable<BlogPostType[]> {
    const current: BlogPostType[] = JSON.parse(localStorage.getItem('posts') || '[]');

    const updated = current.map((p: BlogPostType) => (p.id === post.id ? post : p));

    localStorage.setItem('posts', JSON.stringify(updated));
    this.store.postsList.set(updated);

    return of(updated);
  }

  getPostById(id: string): Observable<BlogPostType | undefined> {
    const current: BlogPostType[] = JSON.parse(localStorage.getItem('posts') || '[]');

    const post = current.find((p) => p.id === id);

    return of(post);
  }

  deletePost(id: string): Observable<BlogPostType[]> {
    const current: BlogPostType[] = JSON.parse(localStorage.getItem('posts') || '[]');

    const updated = current.filter((post) => post.id !== id);

    localStorage.setItem('posts', JSON.stringify(updated));
    this.store.postsList.set(updated);

    return of(updated);
  }
}
