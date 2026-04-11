import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LastArticle } from '../last-article/last-article';

@Component({
  selector: 'app-last-articles',
  imports: [LastArticle, RouterModule],
  templateUrl: './last-articles.html',
  styleUrl: './last-articles.scss',
})
export class LastArticles {}
