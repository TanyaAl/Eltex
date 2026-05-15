import { ArticleEntity } from '../types/ArticleEntity';
import { BlogPostType } from '../types/BlogPostType';
import { CommentEntity } from '../types/CommentEntity';
import { CommentType } from '../types/CommentType';
import { CreateArticleDto } from '../types/CreateArticleDto';
import { NewPost } from '../types/NewPost';

export const mapToBackend = (frontData: NewPost, id: string): CreateArticleDto => ({
  title: frontData.title,
  content: frontData.text,
  categoryId: id,
});

export const mapFromBackend = (backData: ArticleEntity, name: string): BlogPostType => {
  const dateFromBackend = new Date(backData.createdAt)
    .toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    .replace('г', '')
    .replace('.', '');

  console.log('ID', backData.imgSrc);

  return {
    id: backData.id,
    category: name,
    title: backData.title,
    text: backData.content,
    date: dateFromBackend,
    rating: backData.rating,
    image: backData.imgSrc ? backData.imgSrc : '/template.webp',
  };
};

export const mapCommentFromBackend = (comment: CommentEntity): CommentType => {
  const dateFromBackend = new Date(comment.createdAt)
    .toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    .replace('г', '')
    .replace('.', '');
  return {
    id: comment.id,
    postId: comment.articleId,
    author: comment.username,
    text: comment.content,
    date: dateFromBackend,
    rating: comment.rating || 0,
  };
};

export const mapCommentsFromBackend = (comments: CommentEntity[]): CommentType[] => {
  return comments.map((comment) => mapCommentFromBackend(comment));
};
