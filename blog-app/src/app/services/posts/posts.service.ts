import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlogPostType } from '../../types/BlogPostType';
import { PostsServiceInterface } from './posts-service.interface';
import { NewPost } from '../../types/NewPost';
import { PostsResponse } from '../../types/PostsResponse';
import { CommentType } from '../../types/CommentType';

@Injectable()
export class PostsService implements PostsServiceInterface {
  loadPosts(page: number, pageSize: number): Observable<PostsResponse> {
    const all: BlogPostType[] = JSON.parse(localStorage.getItem('posts') || '[]');
    console.log('all', all);
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginated = all.slice(start, end);
    const response: PostsResponse = {
      items: paginated,
      count: all.length,
    };
    return of(response);
  }

  addPost(post: NewPost): Observable<BlogPostType[]> {
    const current: BlogPostType[] = JSON.parse(localStorage.getItem('posts') || '[]');
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
      rating: 0,
    };

    const updated = [...current, newPost];
    localStorage.setItem('posts', JSON.stringify(updated));

    return of(updated);
  }

  updatePost(post: BlogPostType): Observable<BlogPostType[]> {
    const current: BlogPostType[] = JSON.parse(localStorage.getItem('posts') || '[]');

    const updated = current.map((p: BlogPostType) => (p.id === post.id ? post : p));

    localStorage.setItem('posts', JSON.stringify(updated));

    return of(updated);
  }

  getPostById(id: string): Observable<BlogPostType | undefined> {
    const current: BlogPostType[] = JSON.parse(localStorage.getItem('posts') || '[]');
    return of(current.find((p) => p.id === id));
  }

  deletePost(id: string): Observable<BlogPostType[]> {
    const current: BlogPostType[] = JSON.parse(localStorage.getItem('posts') || '[]');
    const postsComments: CommentType[] = JSON.parse(localStorage.getItem('comments') || '[]');

    const updated = current.filter((post) => post.id !== id);
    const updatedPostsComments = postsComments.filter((comment) => comment.postId === id);

    localStorage.setItem('posts', JSON.stringify(updated));
    localStorage.setItem('comments', JSON.stringify(updatedPostsComments));

    return of(updated);
  }
}
