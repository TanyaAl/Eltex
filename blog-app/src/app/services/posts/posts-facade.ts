import { inject, Injectable } from '@angular/core';
import { PostsStoreService } from './posts-store.service';
import { POSTS_SERVICE } from './posts-service.token';
import { NewPost } from '../../types/NewPost';
import { BlogPostType } from '../../types/BlogPostType';

@Injectable()
export class PostsFacade {
  private store = inject(PostsStoreService);
  private service = inject(POSTS_SERVICE);

  postsList = this.store.postsList;

  currentPage = this.store.currentPage;

  pageSize = this.store.pageSize;

  totalCount = this.store.totalCount;

  editingPost = this.store.editingPost;

  loadPosts(page: number, size: number): void {
    this.service.loadPosts(page, size).subscribe((response) => {
      console.log('response', response);
      this.store.setPosts(response.items);
      this.store.setTotalCount(response.total);
      this.store.setCurrentPage(page);
    });
  }

  addPost(post: NewPost, img: File | null): void {
    console.log('POST', post);
    this.service.addPost(post, img).subscribe(() => {
      this.loadPosts(this.currentPage(), this.pageSize());
    });
  }

  updatePost(post: BlogPostType, img: File | null): void {
    this.service.updatePost(post).subscribe(() => {
      this.loadPosts(this.currentPage(), this.pageSize());
    });
  }

  deletePost(id: string): void {
    this.service.deletePost(id).subscribe(() => {
      this.loadPosts(this.currentPage(), this.pageSize());
    });
  }

  getPostById(id: string): void {
    this.service.getPostById(id).subscribe((post) => {
      if (!post) return;
      this.editingPost.set(post);
    });
  }

  setCurrentPage(page: number): void {
    this.store.setCurrentPage(page);
    this.loadPosts(page, this.pageSize());
  }

  clearEditingPost(): void {
    this.store.clearEditingPost();
  }
}
