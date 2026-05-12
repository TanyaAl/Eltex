import { Component, inject, effect } from '@angular/core';
import { PostCard } from '../../components/post-card/post-card';
import { FormForComment } from '../../components/form-for-comment/form-for-comment';
import { FullPostFacade } from '../../../services/fullPost/full-post-facade';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Comments } from '../../components/comments/comments';
import { FullPostService } from '../../../services/fullPost/full-post-service';
import { FullPostStore } from '../../../services/fullPost/full-post-store';
import { FULL_POST_SERVICE } from '../../../services/fullPost/full-post-token';
import { Title } from '@angular/platform-browser';
import { NewCommentType } from '../../../types/NewCommentType';

@Component({
  selector: 'app-post-page',
  imports: [PostCard, FormForComment, Comments, RouterLink],
  templateUrl: './post-page.html',
  styleUrl: './post-page.scss',
  providers: [
    FullPostFacade,
    FullPostStore,
    {
      provide: FULL_POST_SERVICE,
      useClass: FullPostService,
    },
  ],
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
    this.facade.updatePostRating({ id: post.id, rating });
  }

  protected onAddComment(comment: NewCommentType): void {
    const post = this.targetPost();
    if (!post) return;
    this.facade.addComment(post.id, comment);
  }
}
