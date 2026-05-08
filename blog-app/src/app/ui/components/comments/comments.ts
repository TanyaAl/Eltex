import { Component, inject, input } from '@angular/core';
import { Comment } from '../comment/comment';
import { FullPostFacade } from '../../../services/fullPost/full-post-facade';

@Component({
  selector: 'app-comments',
  imports: [Comment],
  templateUrl: './comments.html',
  styleUrl: './comments.scss',
})
export class Comments {
  private facade = inject(FullPostFacade);
  comments = this.facade.comments;

  protected onCommentRatingChange(event: { id: string; rating: number }): void {
    this.facade.updateCommentRating(event.id, event.rating);
  }
}
