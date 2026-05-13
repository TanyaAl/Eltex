import { ArticleEntity } from '../types/ArticleEntity';
import { BlogPostType } from '../types/BlogPostType';
import { CreateArticleDto } from '../types/CreateArticleDto';
import { NewPost } from '../types/NewPost';

export const mapToBackend = (frontData: NewPost): CreateArticleDto => ({
  title: frontData.title,
  content: frontData.text,
  categoryId: frontData.category,
});

export const mapFromBackend = (backData: ArticleEntity): BlogPostType => {
  const dateFromBackend = new Date(backData.createdAt)
    .toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    .replace('г', '')
    .replace('.', '');

  console.log('ID', backData.categoryId);

  return {
    id: backData.id,
    category: backData.categoryId,
    title: backData.title,
    text: backData.content,
    date: dateFromBackend,
    rating: backData.rating,
  };
};
