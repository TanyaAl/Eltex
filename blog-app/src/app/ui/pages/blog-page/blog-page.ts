/* eslint-disable import/prefer-default-export */
import { Component } from '@angular/core';
import { BlogPageTitle } from '../../components/blog-page-title/blog-page-title';
import { BtnOrLink } from '../../components/btn-or-link/btn-or-link';
import { BlogPostsContainer } from '../../components/blog-posts-container/blog-posts-container';
import { TipButtons } from '../../components/tip-buttons/tip-buttons';
import { FormForAddBlogPost } from '../../components/form-for-add-blog-post/form-for-add-blog-post';
import { StatCard } from '../../components/stat-card/stat-card';

@Component({
  selector: 'app-blog-page',
  imports: [BlogPageTitle, BlogPostsContainer, BtnOrLink, TipButtons, FormForAddBlogPost, StatCard],
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.scss',
})
export class BlogPage {
  postsCount = 0;
}
