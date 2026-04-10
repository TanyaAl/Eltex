import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LastArticle1 } from '../last-article-1/last-article-1';
import { LastArticle2 } from '../last-article-2/last-article-2';

@Component({
  selector: 'app-last-articles',
  imports: [LastArticle1, LastArticle2, RouterModule],
  templateUrl: './last-articles.html',
  styleUrl: './last-articles.scss',
})
export class LastArticles {}
