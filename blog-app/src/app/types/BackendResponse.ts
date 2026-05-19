import { ArticleEntity } from './ArticleEntity';

export interface BackendResponse {
  items: ArticleEntity[];
  total: number;
  page: number;
  limit: number;
}
