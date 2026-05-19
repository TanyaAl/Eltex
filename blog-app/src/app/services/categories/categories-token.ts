import { InjectionToken } from '@angular/core';
import { CategoriesInterface } from './categories-interface';

export const CATEGORIES_SERVICE = new InjectionToken<CategoriesInterface>(
  '[CATEGORIES_SERVICE]: для работы с категориями статей',
);
