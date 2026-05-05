import { Component, inject, output, computed } from '@angular/core';
import { PaginationBtns } from '../pagination-btns/pagination-btns';
import { PostsFacade } from '../../../services/posts/posts-facade';

@Component({
  selector: 'app-btn-or-link',
  imports: [PaginationBtns],
  templateUrl: './btn-or-link.html',
  styleUrl: './btn-or-link.scss',
})
export class BtnOrLink {
  private facade = inject(PostsFacade);
  postsCount = this.facade.totalCount;
  currentPage = this.facade.currentPage;
  pageSize = this.facade.pageSize;
  pageChange = output<number>();

  setPage(page: number) {
    this.pageChange.emit(page);
  }
}
