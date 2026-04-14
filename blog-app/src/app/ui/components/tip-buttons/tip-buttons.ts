/* eslint-disable import/prefer-default-export */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { StatCard } from '../stat-card/stat-card';

@Component({
  selector: 'app-tip-buttons',
  imports: [],
  templateUrl: './tip-buttons.html',
  styleUrl: './tip-buttons.scss',
})
export class TipButtons {
  @Input() postsCount: number = 0;

  @Output() addPost = new EventEmitter<void>();

  constructor(private dialog: Dialog) {}

  open() {
    this.dialog.open(StatCard, {
      hasBackdrop: true,
      data: { count: this.postsCount },
    });
  }

  openForm() {
    this.addPost.emit();
  }
}
