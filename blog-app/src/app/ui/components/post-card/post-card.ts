import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FullPostFacade } from '../../../services/fullPost/full-post-facade';
// import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-card',
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCard {
  private facade = inject(FullPostFacade);
  post = this.facade.targetPost;
  ratingChange = output<number>();

  ngOnInit() {
    console.log('POST', this.post());
  }

  increase() {
    const post = this.post();
    if (!post) return;
    this.ratingChange.emit(post.rating + 1);
  }

  decrease() {
    const post = this.post();
    if (!post) return;
    this.ratingChange.emit(post.rating - 1);
  }

  scrollToComments(): void {
    document.getElementById('form-for-comment')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
