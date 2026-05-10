/* eslint-disable import/prefer-default-export */
import { Component, inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { PostsFacade } from '../../../services/posts/posts-facade';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stat-card',
  imports: [MatIconModule],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss',
})
export class StatCard {
  private facade = inject(PostsFacade);
  postsCount = this.facade.totalCount();

  constructor(private dialogRef: DialogRef) {
    console.log('stat', this.postsCount);
  }

  protected close() {
    this.dialogRef.close();
  }
}
