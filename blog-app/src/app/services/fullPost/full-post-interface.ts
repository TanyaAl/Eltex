import { Observable } from 'rxjs';
import { FullPostType } from '../../types/FullPostType';
import { CommentType } from '../../types/CommentType';
import { BlogPostType } from '../../types/BlogPostType';
import { NewCommentType } from '../../types/NewCommentType';
import { UpdatingRating } from '../../types/UpdatingRating';

export interface FullPostInterface {
  loadPostWithComments(id: string): Observable<FullPostType>;
  addComment(postId: string, comment: NewCommentType): Observable<CommentType>;
  updateCommentRating(data: UpdatingRating): Observable<CommentType>;
  upPostRating(data: UpdatingRating): Observable<BlogPostType>;
  downPostRating(data: UpdatingRating): Observable<BlogPostType>;
}
