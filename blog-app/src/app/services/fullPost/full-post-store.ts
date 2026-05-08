import { Injectable, signal } from '@angular/core';
import { CommentType } from '../../types/CommentType';
import { FullPostType } from '../../types/FullPostType';

@Injectable()
export class FullPostStore {
  comments = signal<CommentType[]>([]);
  targetPost = signal<FullPostType | null>(null);

  setTargetPost(post: FullPostType): void {
    this.targetPost.set(post);
  }

  setComments(comments: CommentType[]): void {
    this.comments.set(comments);
  }

  addComment(comment: CommentType): void {
    this.comments.update((prevComments) => [...prevComments, comment]);
  }

  updatePostRating(newRating: number): void {
    this.targetPost.update((prevPost) => {
      if (!prevPost) return null;
      return { ...prevPost, rating: newRating };
    });
  }

  updateCommentRating(id: string, newRating: number): void {
    this.comments.update((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id ? { ...comment, rating: newRating } : comment,
      ),
    );
  }
}
