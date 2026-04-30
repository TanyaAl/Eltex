/* eslint-disable import/prefer-default-export */
import { Component, inject, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LastArticle } from '../last-article/last-article';
import { PostsStoreService } from '../../../services/posts/posts-store.service';
@Component({
  selector: 'app-last-articles',
  imports: [RouterModule, LastArticle],
  templateUrl: './last-articles.html',
  styleUrl: './last-articles.scss',
})
export class LastArticles {
  private store = inject(PostsStoreService);
  blogPosts = this.store.postsList;
  lastPosts = computed(() => this.blogPosts().slice(-2));
  ngOnInit() {
    console.log(this.blogPosts());
  }
}
