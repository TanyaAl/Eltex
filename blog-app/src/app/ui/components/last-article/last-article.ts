import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-last-article',
  imports: [],
  templateUrl: './last-article.html',
  styleUrl: './last-article.scss',
})
export class LastArticle {
  @Input() article: any;
}
