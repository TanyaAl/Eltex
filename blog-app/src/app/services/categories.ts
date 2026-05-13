import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryEntity } from '../types/CategoryEntity';

@Injectable({
  providedIn: 'root',
})
export class Categories {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<CategoryEntity[]> {
    return this.http.get<CategoryEntity[]>('/api/categories');
  }
}
