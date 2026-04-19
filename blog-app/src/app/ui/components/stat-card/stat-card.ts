/* eslint-disable import/prefer-default-export */
import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
  selector: 'app-stat-card',
  imports: [],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss',
})
export class StatCard {
  count: number;

  constructor(
    private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: { count: number },
  ) {
    this.count = data.count;
  }

  close() {
    this.dialogRef.close();
  }
}
