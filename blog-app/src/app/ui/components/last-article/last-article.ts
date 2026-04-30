import { Component, input } from '@angular/core';
import { BlogPostType } from '../../../types/BlogPostType';

@Component({
  selector: 'app-last-article',
  imports: [],
  templateUrl: './last-article.html',
  styleUrl: './last-article.scss',
})
export class LastArticle {
  article = input.required<BlogPostType>();
}
