import { Component } from '@angular/core';
import { BlogPost } from '../blog-post/blog-post';

@Component({
  selector: 'app-articles-container',
  imports: [BlogPost],
  templateUrl: './articles-container.html',
  styleUrl: './articles-container.scss',
})
export class ArticlesContainer {}
