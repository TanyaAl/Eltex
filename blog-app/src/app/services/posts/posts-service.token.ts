import { InjectionToken } from '@angular/core';
import { PostsServiceInterface } from './posts-service.interface';

export const POSTS_SERVICE = new InjectionToken<PostsServiceInterface>(
  '[POSTS_SERVICE]: для работы с постами блога',
);
