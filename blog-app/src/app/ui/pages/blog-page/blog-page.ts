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
    this.postsService
      .getPostsByPage(this.store.currentPage(), this.pageSize())
      .subscribe((posts) => this.paginatedPosts.set(posts));
  }

  protected setPage(page: number) {
    this.store.setCurrentPage(page);
    this.loadPage();
  }

  ngOnInit() {
    this.postsService.loadPosts().subscribe(() => this.loadPage());
  }

  protected onSave(value: { title: string; text: string }) {
    const editPost = this.editingPost();
    if (editPost) {
      this.postsService.updatePost({ ...editPost, ...value }).subscribe();
    } else {
      this.postsService.addPost(value).subscribe();
    }
    this.editingPost.set(null);
    this.loadPage();
  }

  protected onOpenform() {
    this.isFormOpen.set(true);
  }

  protected onEdit(id: string) {
    this.postsService.getPostById(id).subscribe((postToEdit) => {
      if (!postToEdit) return;
      this.editingPost.set(postToEdit);
      this.onOpenform();
      setTimeout(() => {
        document.querySelector('.add-article')?.scrollIntoView({ behavior: 'smooth' });
      });
    });
    this.loadPage();
  }

  protected onDelete(id: string) {
    if (this.editingPost()?.id === id) return;
    this.postsService.deletePost(id).subscribe();
    this.loadPage();
  }

  protected onCloseForm() {
    this.isFormOpen.set(false);
    this.editingPost.set(null);
  }
}
