import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { POSTS_SERVICE } from './services/posts/posts-service.token';
import { PostsService } from './services/posts/posts.service';

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
    {
      provide: POSTS_SERVICE,
      useExisting: PostsService,
    },
  ],
};
