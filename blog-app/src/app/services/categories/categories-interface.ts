import { Observable } from 'rxjs';
import { CategoryEntity } from '../../types/CategoryEntity';

export interface CategoriesInterface {
  getCategories(): Observable<CategoryEntity[]>;
  createCategory(name: string): Observable<CategoryEntity>;
  findByName(name: string): Observable<CategoryEntity | undefined>;
}
