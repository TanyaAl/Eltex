import { Component, inject, input } from '@angular/core';
import { Comment } from '../comment/comment';
import { FullPostFacade } from '../../../services/fullPost/full-post-facade';
import { UpdatingRating } from '../../../types/UpdatingRating';

@Component({
  selector: 'app-comments',
  imports: [Comment],
  templateUrl: './comments.html',
  styleUrl: './comments.scss',
})
export class Comments {
  private facade = inject(FullPostFacade);
  comments = this.facade.comments;

  protected onCommentRatingChange(event: UpdatingRating): void {
    this.facade.updateCommentRating({ id: event.id, rating: event.rating });
  }
}
