/* eslint-disable import/prefer-default-export */
import { Component, signal, computed, inject } from '@angular/core';
import { BlogPageTitle } from '../../components/blog-page-title/blog-page-title';
import { BtnOrLink } from '../../components/btn-or-link/btn-or-link';
import { BlogPostsContainer } from '../../components/blog-posts-container/blog-posts-container';
import { TipButtons } from '../../components/tip-buttons/tip-buttons';
import { FormForAddBlogPost } from '../../components/form-for-add-blog-post/form-for-add-blog-post';
import { BlogPostType } from '../../../types/BlogPostType';
import { PostsStoreService } from '../../../services/posts/posts-store.service';
import { POSTS_SERVICE } from '../../../services/posts/posts-service.token';

@Component({
  selector: 'app-blog-page',
  imports: [BlogPageTitle, BlogPostsContainer, BtnOrLink, TipButtons, FormForAddBlogPost],
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.scss',
})
export class BlogPage {
  isFormOpen = signal(false);

  editingPost = signal<BlogPostType | null>(null);

  paginatedPosts = signal<BlogPostType[]>([]);

  private postsService = inject(POSTS_SERVICE);
  private store = inject(PostsStoreService);

  blogPosts = this.store.postsList;
  postsCount = computed(() => this.store.postsList().length);
  pageSize = this.store.pageSize;

  private loadPage() {
    const posts = this.postsService.getPostsByPage(this.store.currentPage(), this.pageSize());
    // .subscribe((posts) =>
    this.paginatedPosts.set(posts);
  }

  protected setPage(page: number) {
    this.store.setCurrentPage(page);
    this.loadPage();
  }

  ngOnInit() {
    this.loadPage();
  }

  protected onSave(value: { category: string; title: string; text: string }) {
    const editPost = this.editingPost();
    if (editPost) {
      this.postsService.updatePost({ ...editPost, ...value }).subscribe(() => this.loadPage());
    } else {
      this.postsService.addPost(value).subscribe(() => this.loadPage());
    }
    this.editingPost.set(null);
  }

  protected onOpenform() {
    this.isFormOpen.set(true);
  }

  protected onEdit(id: string) {
    const postToEdit = this.postsService.getPostById(id);
    if (!postToEdit) return;
    this.editingPost.set(postToEdit);
    this.onOpenform();
    setTimeout(() => {
      document.querySelector('.add-article')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  protected onDelete(id: string) {
    if (this.editingPost()?.id === id) return;
    this.postsService.deletePost(id).subscribe(() => this.loadPage());
  }

  protected onCloseForm() {
    this.isFormOpen.set(false);
    this.editingPost.set(null);
  }
}
