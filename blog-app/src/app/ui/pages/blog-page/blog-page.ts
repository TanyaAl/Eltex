/* eslint-disable import/prefer-default-export */
import { Component } from '@angular/core';
import { BlogPageTitle } from '../../components/blog-page-title/blog-page-title';
import { BtnOrLink } from '../../components/btn-or-link/btn-or-link';
import { BlogPostsContainer } from '../../components/blog-posts-container/blog-posts-container';
import { TipButtons } from '../../components/tip-buttons/tip-buttons';
import { FormForAddBlogPost } from '../../components/form-for-add-blog-post/form-for-add-blog-post';
import { BlogPostType } from '../../../types/BlogPostType';

@Component({
  selector: 'app-blog-page',
  imports: [BlogPageTitle, BlogPostsContainer, BtnOrLink, TipButtons, FormForAddBlogPost],
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.scss',
})
export class BlogPage {
  postsCount = 0;

  isFormOpen = false;

  blogPosts: BlogPostType[] = [];

  onSave(value: { title: string; text: string }) {
    const todayDate = new Date()
      .toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
      .replace('г', '')
      .replace('.', '');

    const newPost: BlogPostType = {
      id: crypto.randomUUID(),
      category: 'general',
      title: value.title,
      text: value.text,
      date: todayDate,
    };
    this.blogPosts = [...this.blogPosts, newPost];
  }
}
