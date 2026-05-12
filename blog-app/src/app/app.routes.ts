import { Routes } from '@angular/router';
import { MainPage } from './ui/pages/main-page/main-page';
import { BlogPage } from './ui/pages/blog-page/blog-page';
import { PostPage } from './ui/pages/post-page/post-page';

export const routes: Routes = [
  { path: '', title: 'Main', component: MainPage },
  { path: 'blog', title: 'Blog', component: BlogPage },
  { path: 'blog/:id', component: PostPage },
];
