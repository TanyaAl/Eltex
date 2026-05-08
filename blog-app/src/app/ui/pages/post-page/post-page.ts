import { Component, inject } from '@angular/core';
import { PostCard } from '../../components/post-card/post-card';
import { FormForComment } from '../../components/form-for-comment/form-for-comment';
import { FullPostFacade } from '../../../services/fullPost/full-post-facade';
import { ActivatedRoute } from '@angular/router';
import { CommentType } from '../../../types/CommentType';
import { Comments } from '../../components/comments/comments';

@Component({
  selector: 'app-post-page',
  imports: [PostCard, FormForComment, Comments],
  templateUrl: './post-page.html',
  styleUrl: './post-page.scss',
})
export class PostPage {
  private facade = inject(FullPostFacade);
  private route = inject(ActivatedRoute);

  targetPost = this.facade.targetPost;
  comments = this.facade.comments;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID FROM ROUTE', id);

    if (!id) return;

    this.facade.loadPostWithComments(id);
  }

  protected onPostRatingChange(rating: number): void {
    console.log('RATING', rating);
    const post = this.targetPost();
    if (!post) return;
    this.facade.updatePostRating(post.id, rating);
  }

  protected onAddComment(comment: { author: string; text: string }): void {
    const post = this.targetPost();
    if (!post) return;
    this.facade.addComment(post.id, comment);
  }
}
