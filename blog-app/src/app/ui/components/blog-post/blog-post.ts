import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.scss',
})
export class BlogPost {
  @Input() blog_post!: {
    id: number;
    category: string;
    title: string;
    text: string;
    date: string;
  };
}
