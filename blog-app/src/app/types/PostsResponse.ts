import { BlogPostType } from './BlogPostType';

export type PostsResponse = {
  items: BlogPostType[];
  total: number;
};
