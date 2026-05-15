import { inject, Injectable } from '@angular/core';
import { PostsServiceInterface } from './posts-service.interface';
import { combineLatest, mergeMap, Observable, of, map, switchMap } from 'rxjs';
import { PostsResponse } from '../../types/PostsResponse';
import { HttpClient } from '@angular/common/http';
import { BlogPostType } from '../../types/BlogPostType';
import { NewPost } from '../../types/NewPost';
import { mapFromBackend, mapToBackend } from '../../utils/mappers';
import { BackendResponse } from '../../types/BackendResponse';
import { CATEGORIES_SERVICE } from '../categories/categories-token';
import { ArticleEntity } from '../../types/ArticleEntity';
import { CategoryEntity } from '../../types/CategoryEntity';

@Injectable()
export class PostsApiService implements PostsServiceInterface {
  private categoriesService = inject(CATEGORIES_SERVICE);
  constructor(private http: HttpClient) {}

  private ensureCategory(categoryName: string): Observable<CategoryEntity> {
    return this.categoriesService.getCategories().pipe(
      mergeMap((categories) => {
        const found = categories.find((c) => c.name.toLowerCase() === categoryName.toLowerCase());
        return found ? of(found) : this.categoriesService.createCategory(categoryName);
      }),
    );
  }

  loadPosts(page: number, pageSize: number): Observable<PostsResponse> {
    console.log('BACKEND');
    return combineLatest([
      this.http.get<BackendResponse>(`/api/articles?page=${page}&limit=${pageSize}`),
      this.categoriesService.getCategories(),
    ]).pipe(
      map(([response, categories]) => ({
        ...response,
        items: response.items.map((item) => {
          const category = categories.find((cat) => cat.id === item.categoryId);
          return mapFromBackend(item, category?.name || 'Без категории');
        }),
      })),
    );
  }

  addPost(data: NewPost, img: File | null): Observable<BlogPostType[]> {
    console.log('CATEGORYFROMFORMDATA', data.category);
    console.log('FILE TO SEND:', img);

    return this.ensureCategory(data.category).pipe(
      switchMap((category) => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('content', data.text);
        formData.append('categoryId', category.id);

        if (img) {
          formData.append('image', img);
        }
        console.log('RJIRJGHZLRF');
        return this.http.post<BlogPostType[]>('/api/articles', formData);
      }),
    );
  }

  updatePost(post: BlogPostType, img: File | null): Observable<BlogPostType[]> {
    return this.ensureCategory(post.category).pipe(
      switchMap((category) => {
        const formData = new FormData();
        formData.append('title', post.title);
        formData.append('content', post.text);
        formData.append('categoryId', category.id);

        if (img) {
          formData.append('image', img);
        }
        return this.http.patch<BlogPostType[]>(`/api/articles/${post.id}`, formData);
      }),
    );
  }

  getPostById(id: string): Observable<BlogPostType | undefined> {
    return combineLatest([
      this.http.get<ArticleEntity>(`/api/articles/${id}`),
      this.categoriesService.getCategories(),
    ]).pipe(
      map(([article, categories]) => {
        const category = categories.find((cat) => cat.id === article.categoryId);

        return mapFromBackend(article, category?.name ?? 'Без категории');
      }),
    );
  }

  deletePost(id: string): Observable<BlogPostType[]> {
    return this.http.delete<BlogPostType[]>(`/api/articles/${id}`);
  }
}
