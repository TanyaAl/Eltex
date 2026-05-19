import { Injectable } from '@angular/core';
import { CategoriesInterface } from './categories-interface';
import { Observable, of } from 'rxjs';
import { CategoryEntity } from '../../types/CategoryEntity';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs';
import { CategoryDto } from '../../types/CategoryDto';

@Injectable()
export class CategoriesApiService implements CategoriesInterface {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<CategoryEntity[]> {
    return this.http.get<CategoryEntity[]>(`/api/categories`) || [];
  }

  createCategory(name: string): Observable<CategoryEntity> {
    return this.http.get<CategoryEntity[]>('/api/categories').pipe(
      map((categories) => categories.find((cat) => cat.name.toLowerCase() === name.toLowerCase())),
      switchMap((existingCategory) => {
        if (existingCategory) {
          return of(existingCategory);
        }
        const newCategory: CategoryDto = {
          name,
        };
        return this.http.post<CategoryEntity>('/api/categories', newCategory);
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
