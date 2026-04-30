import { Observable } from 'rxjs';
import { BlogPostType } from '../../types/BlogPostType';

export interface PostsServiceInterface {
  loadPosts(): Observable<BlogPostType[]>;
  addPost(data: { title: string; text: string }): Observable<BlogPostType[]>;
  deletePost(id: string): Observable<BlogPostType[]>;
  getPostById(id: string): Observable<BlogPostType | undefined>;
  updatePost(post: BlogPostType): Observable<BlogPostType[]>;
  getPostsByPage(page: number, pageSize: number): Observable<BlogPostType[]>;
  getTotalPostsCount(): Observable<number>;
}
