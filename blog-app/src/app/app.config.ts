import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { POSTS_SERVICE } from './services/posts/posts-service.token';
import { PostsService } from './services/posts/posts.service';
import { PostsStoreService } from './services/posts/posts-store.service';
import { PostsFacade } from './services/posts/posts-facade';

import { FULL_POST_SERVICE } from './services/fullPost/full-post-token';
import { FullPostStore } from './services/fullPost/full-post-store';
import { FullPostService } from './services/fullPost/full-post-service';
import { FullPostFacade } from './services/fullPost/full-post-facade';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
      }),
    ),
    PostsFacade,
    PostsStoreService,
    {
      provide: POSTS_SERVICE,
      useClass: PostsService,
    },
    FullPostFacade,
    FullPostStore,
    {
      provide: FULL_POST_SERVICE,
      useClass: FullPostService,
    },
  ],
};
