import { Injectable } from '@angular/core';
import { CategoriesInterface } from './categories-interface';
import { Observable, of } from 'rxjs';
import { CategoryEntity } from '../../types/CategoryEntity';
import { HttpClient } from '@angular/common/http';
import { map, tap, BehaviorSubject } from 'rxjs';
import { CategoryDto } from '../../types/CategoryDto';

@Injectable()
export class CategoriesApiService implements CategoriesInterface {
  private categoriesSubject$ = new BehaviorSubject<CategoryEntity[]>([]);
  categories$ = this.categoriesSubject$.asObservable();
  constructor(private http: HttpClient) {}

  loadCategories(): void {
    this.http.get<CategoryEntity[]>('/api/categories').subscribe({
      next: (categories) => this.categoriesSubject$.next(categories || []),
      error: () => this.categoriesSubject$.next([]),
    });
  }

  getCategories(): Observable<CategoryEntity[]> {
    if (this.categoriesSubject$.getValue().length === 0) {
      this.loadCategories();
    }
    return this.categories$;
  }

  createCategory(name: string): Observable<CategoryEntity> {
    const currentCategories = this.categoriesSubject$.getValue();
    const existingCategory = currentCategories.find(
      (cat) => cat.name.toLowerCase() === name.toLowerCase(),
    );

    if (existingCategory) {
      return of(existingCategory);
    }

    const newCategory: CategoryDto = { name };

    return this.http.post<CategoryEntity>('/api/categories', newCategory).pipe(
      tap((createdCategory) => {
        const updatedList = [...currentCategories, createdCategory];
        this.categoriesSubject$.next(updatedList);
      }),
    );
  }

  findByName(name: string): Observable<CategoryEntity | undefined> {
    return this.http
      .get<CategoryEntity[]>('/api/categories')
      .pipe(
        map((categories) =>
          categories.find((cat: CategoryEntity) => cat.name.toLowerCase() === name.toLowerCase()),
        ),
      );
  }
}
