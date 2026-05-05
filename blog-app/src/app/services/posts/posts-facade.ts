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
      this.store.setTotalCount(response.count);
      this.store.setCurrentPage(page);
    });
  }

  addPost(post: NewPost): void {
    this.service.addPost(post).subscribe(() => {
      this.loadPosts(this.currentPage(), this.pageSize());
    });
  }

  updatePost(post: BlogPostType): void {
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
}
