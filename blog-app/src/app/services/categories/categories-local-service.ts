import { Injectable } from '@angular/core';
import { CategoriesInterface } from './categories-interface';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { CategoryEntity } from '../../types/CategoryEntity';

@Injectable()
export class CategoriesLocalService implements CategoriesInterface {
  categories$ = new BehaviorSubject<CategoryEntity[]>([]);

  private initIfEmpty(): void {
    const existing = localStorage.getItem('categories');

    if (!existing) {
      const defaultCategories: CategoryEntity[] = [
        { id: crypto.randomUUID(), name: 'Технологии' },
        { id: crypto.randomUUID(), name: 'Дизайн' },
        { id: crypto.randomUUID(), name: 'Разработка' },
      ];

      localStorage.setItem('categories', JSON.stringify(defaultCategories));
      this.categories$.next(defaultCategories);
    } else {
      this.categories$.next(JSON.parse(existing));
    }
  }

  constructor() {
    this.initIfEmpty();
  }

  getCategories(): Observable<CategoryEntity[]> {
    return this.categories$.asObservable();
  }

  createCategory(name: string): Observable<CategoryEntity> {
    console.log('createCategory called', name);
    const categories = this.categories$.getValue();
    console.log('current categories$', categories);
    const exCategory = categories.find(
      (cat: CategoryEntity) => cat.name.toLowerCase() === name.toLowerCase(),
    );
    if (exCategory) return of(exCategory);
    const newCategory: CategoryEntity = {
      id: crypto.randomUUID(),
      name: name,
    };

    const updatedCategories = [...categories, newCategory];
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
    console.log('after next, categories$', updatedCategories);
    this.categories$.next(updatedCategories);
    return of(newCategory);
  }

  findByName(name: string): Observable<CategoryEntity | undefined> {
    const categories = JSON.parse(localStorage.getItem('categories') || '[]');
    const category = categories.find(
      (cat: CategoryEntity) => cat.name.toLowerCase() === name.toLowerCase(),
    );
    return of(category);
  }
}
