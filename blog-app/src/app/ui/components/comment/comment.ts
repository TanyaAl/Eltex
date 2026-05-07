import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-comment',
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './comment.html',
  styleUrl: './comment.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Comment {}
