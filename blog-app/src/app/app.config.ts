import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { POSTS_SERVICE } from './services/posts/posts-service.token';
import { PostsService } from './services/posts/posts.service';
import { PostsStoreService } from './services/posts/posts-store.service';

import { routes } from './app.routes';
import { PostsFacade } from './services/posts/posts-facade';

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
  ],
};
