import { Component, inject, output, computed } from '@angular/core';
import { PaginationBtns } from '../pagination-btns/pagination-btns';
import { PostsStoreService } from '../../../services/posts/posts-store.service';

@Component({
  selector: 'app-btn-or-link',
  imports: [PaginationBtns],
  templateUrl: './btn-or-link.html',
  styleUrl: './btn-or-link.scss',
})
export class BtnOrLink {
  private store = inject(PostsStoreService);
  postsCount = computed(() => this.store.postsList().length);
  currentPage = this.store.currentPage;
  pageSize = this.store.pageSize;
  pageChange = output<number>();

  setPage(page: number) {
    this.pageChange.emit(page);
  }
}
