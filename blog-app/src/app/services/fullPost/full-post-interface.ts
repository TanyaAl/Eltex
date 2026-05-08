import { Observable } from 'rxjs';
import { FullPostType } from '../../types/FullPostType';
import { CommentType } from '../../types/CommentType';
import { BlogPostType } from '../../types/BlogPostType';
import { NewCommentType } from '../../types/NewCommentType';

export interface FullPostInterface {
  loadPostWithComments(id: string): Observable<FullPostType>;
  addComment(postId: string, comment: NewCommentType): Observable<CommentType[]>;
  updateCommentRating(commentId: string, rating: number): Observable<CommentType>;
  updatePostRating(postId: string, rating: number): Observable<BlogPostType>;
}
