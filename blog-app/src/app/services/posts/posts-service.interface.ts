import { Observable } from 'rxjs';
import { BlogPostType } from '../../types/BlogPostType';
import { NewPost } from '../../types/NewPost';
import { PostsResponse } from '../../types/PostsResponse';

export interface PostsServiceInterface {
  loadPosts(page: number, pageSize: number): Observable<PostsResponse>;
  addPost(data: NewPost): Observable<BlogPostType[]>;
  deletePost(id: string): Observable<BlogPostType[]>;
  getPostById(id: string): Observable<BlogPostType | undefined>;
  updatePost(post: BlogPostType): Observable<BlogPostType[]>;
}
