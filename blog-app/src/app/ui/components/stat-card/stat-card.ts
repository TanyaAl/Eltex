/* eslint-disable import/prefer-default-export */
import { Component, inject, computed, Inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { PostsStoreService } from '../../../services/posts/posts-store.service';

@Component({
  selector: 'app-stat-card',
  imports: [],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss',
})
export class StatCard {
  private store = inject(PostsStoreService);
  postsCount = computed(() => this.store.postsList().length);

  constructor(private dialogRef: DialogRef) {
    console.log(this.store.postsList);
  }

  protected close() {
    this.dialogRef.close();
  }
}
