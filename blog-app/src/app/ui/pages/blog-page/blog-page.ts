/* eslint-disable import/prefer-default-export */
import { Component, signal, computed } from '@angular/core';
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
  isFormOpen = signal(false);

  blogPosts = signal<BlogPostType[]>([]);

  editingPost = signal<BlogPostType | null>(null);

  postsCount = computed(() => this.blogPosts().length);

  protected onSave(value: { title: string; text: string }) {
    if (this.editingPost()) {
      this.blogPosts.update((posts) =>
        posts.map((post) => (post.id === this.editingPost()?.id ? { ...post, ...value } : post)),
      );
    } else {
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
      this.blogPosts.update((posts) => [...posts, newPost]);
    }
    this.editingPost.set(null);
  }

  protected onOpenform() {
    this.isFormOpen.set(true);
  }

  protected onEdit(id: string) {
    const post = this.blogPosts().find((p) => p.id === id);
    if (!post) return;
    this.editingPost.set(post);
    this.onOpenform();
    setTimeout(() => {
      document.querySelector('.add-article')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  protected onDelete(id: string) {
    if (this.editingPost()?.id === id) return;
    console.log(id);
    this.blogPosts.update((posts) => posts.filter((post) => post.id !== id));
  }

  protected onCloseForm() {
    this.isFormOpen.set(false);
    this.editingPost.set(null);
  }
}
