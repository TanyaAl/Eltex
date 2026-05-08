import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class TitleService {
  constructor(private title: Title) {}

  setTitle(title: string) {
    this.title.setTitle(title);
  }

  setFromRoute(route: string) {
    // console.log('POSTTITLE', postTitle);
    // if (route.startsWith('/blog/') && postTitle) {
    //   this.title.setTitle(postTitle);
    //   return;
    // }
    if (route === '/blog') {
      this.title.setTitle('Blog');
      return;
    }
    if (route === '/') {
      this.title.setTitle('Main');
      return;
    }

    this.title.setTitle('BlogApp');
  }
}
