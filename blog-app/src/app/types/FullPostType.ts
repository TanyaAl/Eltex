import { CommentType } from './CommentType';

export interface FullPostType {
  id: string;
  category: string;
  title: string;
  text: string;
  image?: string;
  date: string;
  rating: number;
  comments: CommentType[];
}
