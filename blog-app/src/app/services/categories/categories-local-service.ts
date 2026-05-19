import { Injectable } from '@angular/core';
import { CategoriesInterface } from './categories-interface';
import { Observable, of } from 'rxjs';
import { CategoryEntity } from '../../types/CategoryEntity';

@Injectable()
export class CategoriesLocalService implements CategoriesInterface {
  private initIfEmpty(): void {
    const existing = localStorage.getItem('categories');

    if (!existing) {
      const defaultCategories: CategoryEntity[] = [
        { id: crypto.randomUUID(), name: 'Технологии' },
        { id: crypto.randomUUID(), name: 'Дизайн' },
        { id: crypto.randomUUID(), name: 'Разработка' },
      ];

      localStorage.setItem('categories', JSON.stringify(defaultCategories));
    }
  }

  getCategories(): Observable<CategoryEntity[]> {
    this.initIfEmpty();
    const categories = JSON.parse(localStorage.getItem('categories') || '[]');
    // console.log('LOCALCATEG', categories);
    return of(categories);
  }

  createCategory(name: string): Observable<CategoryEntity> {
    const categories = JSON.parse(localStorage.getItem('categories') || '[]');
    const exCategory = categories.find((cat: CategoryEntity) => cat.name === name);
    if (exCategory) return of(exCategory);
    const newCategory: CategoryEntity = {
      id: crypto.randomUUID(),
      name: name,
    };

    const updatedCategories = [...categories, newCategory];
    localStorage.setItem('categories', JSON.stringify(updatedCategories));

    return of(newCategory);
  }

  findByName(name: string): Observable<CategoryEntity | undefined> {
    const categories = JSON.parse(localStorage.getItem('categories') || '[]');
    const category = categories.find((cat: CategoryEntity) => cat.name === name);
    return of(category);
  }
}
