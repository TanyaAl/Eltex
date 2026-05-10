import { Component, ChangeDetectionStrategy, inject, output, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommentType } from '../../../types/CommentType';

@Component({
  selector: 'app-comment',
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './comment.html',
  styleUrl: './comment.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Comment {
  comment = input<CommentType>();
  index = input<number>();
  ratingChange = output<{ id: string; rating: number }>();

  ngOnInit() {
    console.log('COMMENT', this.comment());
  }
  increase() {
    const comment = this.comment();
    if (!comment) return;
    this.ratingChange.emit({ id: comment.id, rating: comment.rating + 1 });
  }

  decrease() {
    const comment = this.comment();
    if (!comment) return;
    this.ratingChange.emit({ id: comment.id, rating: comment.rating - 1 });
  }
}
