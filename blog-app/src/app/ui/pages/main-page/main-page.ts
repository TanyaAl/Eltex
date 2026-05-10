import { Component, inject } from '@angular/core';
import { AboutMe } from '../../components/about-me/about-me';
import { MainPageInfo } from '../../components/main-page-info/main-page-info';
import { Hobby } from '../../components/hobby/hobby';
import { PostsFacade } from '../../../services/posts/posts-facade';

@Component({
  selector: 'app-main-page',
  imports: [AboutMe, MainPageInfo, Hobby],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  private facade = inject(PostsFacade);

  ngOnInit() {
    this.facade.loadPosts(this.facade.currentPage(), this.facade.pageSize());
  }
}
