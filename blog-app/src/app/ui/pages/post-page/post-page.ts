import { Component, inject, effect } from '@angular/core';
import { PostCard } from '../../components/post-card/post-card';
import { FormForComment } from '../../components/form-for-comment/form-for-comment';
import { FullPostFacade } from '../../../services/fullPost/full-post-facade';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Comments } from '../../components/comments/comments';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-page',
  imports: [PostCard, FormForComment, Comments, RouterLink],
  templateUrl: './post-page.html',
  styleUrl: './post-page.scss',
})
export class PostPage {
  private facade = inject(FullPostFacade);
  private route = inject(ActivatedRoute);
  private titleService = inject(Title);

  targetPost = this.facade.targetPost;
  comments = this.facade.comments;

  constructor() {
    effect(() => {
      const post = this.targetPost();

      if (post) {
        this.titleService.setTitle(post.title);
      }
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

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
