import { Component } from '@angular/core';
import { BlogPageTitle } from '../../components/blog-page-title/blog-page-title';
import { BtnOrLink } from '../../components/btn-or-link/btn-or-link';
import { ArticlesContainer } from '../../components/articles-container/articles-container';
import { TipButtons } from '../../components/tip-buttons/tip-buttons';
import { FormForAddBlogPost } from '../../components/form-for-add-blog-post/form-for-add-blog-post';
import { StatCard } from '../../components/stat-card/stat-card';

@Component({
  selector: 'app-blog-page',
  imports: [BlogPageTitle, ArticlesContainer, BtnOrLink, TipButtons, FormForAddBlogPost, StatCard],
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.scss',
})
export class BlogPage {
  blogPosts = [];
}
