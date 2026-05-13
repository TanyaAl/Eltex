import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { POSTS_SERVICE } from './services/posts/posts-service.token';
import { PostsService } from './services/posts/posts.service';
import { PostsStoreService } from './services/posts/posts-store.service';
import { PostsFacade } from './services/posts/posts-facade';
import { PostsApiService } from './services/posts/posts-api-service';
import { environment } from '../environments/environment';

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
    provideHttpClient(),
    PostsFacade,
    PostsStoreService,
    {
      provide: POSTS_SERVICE,
      useClass: environment.production ? PostsService : PostsApiService,
    },
  ],
};
