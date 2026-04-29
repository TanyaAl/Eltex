/* eslint-disable import/prefer-default-export */
import { Component, input, output } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { StatCard } from '../stat-card/stat-card';

@Component({
  selector: 'app-tip-buttons',
  imports: [],
  templateUrl: './tip-buttons.html',
  styleUrl: './tip-buttons.scss',
})
export class TipButtons {
  addPost = output<void>();

  postsCount = input<number>(0);

  constructor(private dialog: Dialog) {}

  protected openStat() {
    this.dialog.open(StatCard, {
      hasBackdrop: true,
      data: { count: this.postsCount() },
    });
  }

  protected openForm() {
    this.addPost.emit();
    setTimeout(() => {
      document.querySelector('.add-article')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
