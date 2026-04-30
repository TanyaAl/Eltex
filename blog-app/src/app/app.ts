/* eslint-disable import/no-unresolved */
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './ui/components/header/header';
import { Footer } from './ui/components/footer/footer';
import { POSTS_SERVICE } from './services/posts/posts-service.token';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('blog-app');
  private postsService = inject(POSTS_SERVICE);

  ngOnInit() {
    this.postsService.loadPosts().subscribe();
  }
}
