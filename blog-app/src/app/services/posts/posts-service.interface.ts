import { Observable } from 'rxjs';
import { BlogPostType } from '../../types/BlogPostType';

export interface PostsServiceInterface {
  loadPosts(): Observable<BlogPostType[]>;
  addPost(data: { category: string; title: string; text: string }): Observable<BlogPostType[]>;
  deletePost(id: string): Observable<BlogPostType[]>;
  getPostById(id: string): BlogPostType | undefined;
  updatePost(post: BlogPostType): Observable<BlogPostType[]>;
  getPostsByPage(page: number, pageSize: number): BlogPostType[];
  getTotalPostsCount(): number;
}

// убрала Observable из getTotalPostsCount, getPostsByPage, getPostById, потому что если правильно поняла, он нужен только когда данные меняются и нужно отслеживать изменения при помощи subscribe? А эти методы просто берут величину или пост по id из уже сформированного хранилища, не внося никаких изменений//
