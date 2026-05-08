import { Injectable, inject } from '@angular/core';
import { FullPostStore } from './full-post-store';
import { FULL_POST_SERVICE } from './full-post-token';
import { CommentType } from '../../types/CommentType';
import { FullPostType } from '../../types/FullPostType';

@Injectable()
export class FullPostFacade {
  private store = inject(FullPostStore);
  private service = inject(FULL_POST_SERVICE);

  comments = this.store.comments;
  targetPost = this.store.targetPost;

  loadPostWithComments(id: string): void {
    this.service.loadPostWithComments(id).subscribe((response) => {
      console.log('PAGE', response);
      this.store.setTargetPost(response);
      this.store.setComments(response.comments);
    });
  }

  addComment(postId: string, comment: { author: string; text: string }): void {
    this.service.addComment(postId, comment).subscribe((updatedComments) => {
      this.store.addComment(updatedComments);
    });
  }

  updateCommentRating(commentId: string, rating: number): void {
    this.service.updateCommentRating(commentId, rating).subscribe((updatedComment) => {
      this.store.updateCommentRating(updatedComment.id, updatedComment.rating);
    });
  }

  updatePostRating(postId: string, rating: number): void {
    this.service.updatePostRating(postId, rating).subscribe((updatedPost) => {
      this.store.updatePostRating(updatedPost.rating);
    });
  }
}
