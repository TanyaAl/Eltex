/* eslint-disable import/prefer-default-export */
import { Component, inject, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LastArticle } from '../last-article/last-article';
import { PostsFacade } from '../../../services/posts/posts-facade';

@Component({
  selector: 'app-last-articles',
  imports: [RouterModule, LastArticle],
  templateUrl: './last-articles.html',
  styleUrl: './last-articles.scss',
})
export class LastArticles {
  private facade = inject(PostsFacade);
  blogPosts = this.facade.postsList;
  lastPosts = computed(() => this.blogPosts().slice(-2));
  ngOnInit() {
    console.log(this.blogPosts());
  }
}
