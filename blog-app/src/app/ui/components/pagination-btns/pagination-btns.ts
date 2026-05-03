import { Component, input, output, computed } from '@angular/core';

@Component({
  selector: 'app-pagination-btns',
  imports: [],
  templateUrl: './pagination-btns.html',
  styleUrl: './pagination-btns.scss',
})
export class PaginationBtns {
  currentPage = input.required<number>();
  totalPosts = input.required<number>();
  pageSize = input.required<number>();

  pageChange = output<number>();

  totalPages = computed(() => {
    return Math.ceil(this.totalPosts() / this.pageSize());
  });

  pagesArray = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1));

  setPage(page: number) {
    this.pageChange.emit(page);
  }
}
