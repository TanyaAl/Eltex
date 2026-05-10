import { InjectionToken } from '@angular/core';
import { FullPostInterface } from './full-post-interface';

export const FULL_POST_SERVICE = new InjectionToken<FullPostInterface>(
  '[FULL_POST_SERVICE]: для работы с комментариями отдельного поста',
);
