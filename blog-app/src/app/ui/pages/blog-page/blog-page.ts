/* eslint-disable import/prefer-default-export */
import { Component, signal, inject } from '@angular/core';
import { BlogPageTitle } from '../../components/blog-page-title/blog-page-title';
import { BtnOrLink } from '../../components/btn-or-link/btn-or-link';
import { BlogPostsContainer } from '../../components/blog-posts-container/blog-posts-container';
import { TipButtons } from '../../components/tip-buttons/tip-buttons';
import { FormForAddBlogPost } from '../../components/form-for-add-blog-post/form-for-add-blog-post';
import { NewPost } from '../../../types/NewPost';
import { PostsFacade } from '../../../services/posts/posts-facade';

@Component({
  selector: 'app-blog-page',
  imports: [BlogPageTitle, BlogPostsContainer, BtnOrLink, TipButtons, FormForAddBlogPost],
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.scss',
})
export class BlogPage {
  isFormOpen = signal(false);

  private facade = inject(PostsFacade);

  paginatedPosts = this.facade.postsList;
  pageSize = this.facade.pageSize;
  currentPage = this.facade.currentPage;
  editingPost = this.facade.editingPost;

  private loadPage() {
    this.facade.loadPosts(this.currentPage(), this.pageSize());
  }

  protected setPage(page: number) {
    this.facade.setCurrentPage(page);
    this.loadPage();
  }

  ngOnInit() {
    this.loadPage();
  }

  protected onSave(value: NewPost) {
    const editPost = this.editingPost();
    if (editPost) {
      this.facade.updatePost({ ...editPost, ...value });
    } else {
      this.facade.addPost(value);
    }
    this.editingPost.set(null);
  }

  protected onOpenform() {
    this.isFormOpen.set(true);
  }

  protected onEdit(id: string) {
    this.facade.getPostById(id);

    this.onOpenform();
    setTimeout(() => {
      document.querySelector('.add-article')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  protected onDelete(id: string) {
    if (this.editingPost()?.id === id) return;
    this.facade.deletePost(id);
  }

  protected onCloseForm() {
    this.isFormOpen.set(false);
    this.editingPost.set(null);
  }
}
