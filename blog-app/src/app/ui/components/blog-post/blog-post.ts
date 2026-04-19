/* eslint-disable import/prefer-default-export */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.scss',
})
export class BlogPost {
  @Input() blog_post!: {
    id: any;
    category: string;
    title: string;
    text: string;
    date: string;
  };

  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.blog_post.id);
  }
}
