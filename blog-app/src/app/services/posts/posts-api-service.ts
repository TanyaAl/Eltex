import { Injectable } from '@angular/core';
import { PostsServiceInterface } from './posts-service.interface';
import { Observable, tap } from 'rxjs';
import { PostsResponse } from '../../types/PostsResponse';
import { HttpClient } from '@angular/common/http';
import { BlogPostType } from '../../types/BlogPostType';
import { NewPost } from '../../types/NewPost';
import { mapFromBackend, mapToBackend } from '../../utils/mappers';
import { BackendResponse } from '../../types/BackendResponse';
import { map } from 'rxjs';

@Injectable()
export class PostsApiService implements PostsServiceInterface {
  constructor(private http: HttpClient) {}

  loadPosts(page: number, pageSize: number): Observable<PostsResponse> {
    console.log('BACKEND');
    return this.http.get<BackendResponse>(`/api/articles?page=${page}&limit=${pageSize}`).pipe(
      tap((response) => console.log('BACKRESP_BEFORE', response)),
      map(
        (response: BackendResponse): PostsResponse => ({
          ...response,
          items: response.items.map(mapFromBackend),
        }),
      ),
      tap((response) => console.log('BACKRESP_AFTER', response)),
    );
  }

  addPost(data: NewPost): Observable<BlogPostType[]> {
    console.log('HIT API SERVICE');
    const backendBody = mapToBackend(data);
    console.log('BACKENDBODY', backendBody);
    return this.http.post<BlogPostType[]>('/api/articles', backendBody);
  }

  updatePost(post: BlogPostType): Observable<BlogPostType[]> {
    return this.http.patch<BlogPostType[]>(`/api/articles/${post.id}`, post);
  }

  getPostById(id: string): Observable<BlogPostType | undefined> {
    return this.http.get<BlogPostType | undefined>(`/api/articles/${id}`);
  }

  deletePost(id: string): Observable<BlogPostType[]> {
    return this.http.delete<BlogPostType[]>(`/api/articles/${id}`);
  }
}
