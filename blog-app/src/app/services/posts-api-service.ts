import { Injectable } from '@angular/core';
import { PostsServiceInterface } from './posts/posts-service.interface';
import { Observable } from 'rxjs';
import { PostsResponse } from '../types/PostsResponse';
import { HttpClient } from '@angular/common/http';
import { BlogPostType } from '../types/BlogPostType';
import { NewPost } from '../types/NewPost';

@Injectable()
export class PostsApiService implements PostsServiceInterface {
  constructor(private http: HttpClient) {}

  loadPosts(page: number, pageSize: number): Observable<PostsResponse> {
    return this.http.get<PostsResponse>(`/api/articles?page=${page}&limit=${pageSize}`);
  }

  addPost(data: NewPost): Observable<BlogPostType[]> {
    return this.http.post<BlogPostType[]>('api/articles', data);
  }

  updatePost(post: BlogPostType): Observable<BlogPostType[]> {
    return this.http.patch<BlogPostType[]>(`api/articles/${post.id}`, post);
  }

  getPostById(id: string): Observable<BlogPostType | undefined> {
    return this.http.get<BlogPostType | undefined>(`api/articles/${id}`);
  }

  deletePost(id: string): Observable<BlogPostType[]> {
    return this.http.delete<BlogPostType[]>(`api/articles/${id}`);
  }
}
