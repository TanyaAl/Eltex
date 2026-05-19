import { inject, Injectable } from '@angular/core';
import { FullPostInterface } from './full-post-interface';
import { forkJoin, Observable, of } from 'rxjs';
import { CommentType } from '../../types/CommentType';
import { FullPostType } from '../../types/FullPostType';
import { BlogPostType } from '../../types/BlogPostType';
import { NewCommentType } from '../../types/NewCommentType';
import { UpdatingRating } from '../../types/UpdatingRating';
import { HttpClient } from '@angular/common/http';
import { CATEGORIES_SERVICE } from '../categories/categories-token';
import { ArticleEntity } from '../../types/ArticleEntity';
import { mapCommentsFromBackend, mapCommentFromBackend, mapFromBackend } from '../../utils/mappers';
import { map, switchMap } from 'rxjs';
import { CommentEntity } from '../../types/CommentEntity';

@Injectable()
export class FullPostApiService implements FullPostInterface {
  private http = inject(HttpClient);
  private categoriesService = inject(CATEGORIES_SERVICE);

  loadPostWithComments(id: string): Observable<FullPostType> {
    return forkJoin({
      article: this.http.get<ArticleEntity>(`/api/articles/${id}`),
      comments: this.http.get<CommentEntity[]>(`/api/comments/article/${id}`),
      categories: this.categoriesService.getCategories(),
    }).pipe(
      map(({ article, comments, categories }) => {
        const category = categories.find((cat) => cat.id === article.categoryId);
        const mappedPost = mapFromBackend(article, category?.name || 'Без категории');
        console.log('COMMENTS', comments);
        console.log('MAPPED IMAGE PATH:', mappedPost.image);

        return {
          ...mappedPost,
          comments: mapCommentsFromBackend(comments),
        };
      }),
    );
  }

  addComment(postId: string, comment: NewCommentType): Observable<CommentType> {
    const body = {
      username: comment.author,
      content: comment.text,
      articleId: postId,
    };
    console.log('NEWCOMMENT', body);
    return this.http
      .post<CommentEntity>(`/api/comments`, body)
      .pipe(map((response: CommentEntity): CommentType => mapCommentFromBackend(response)));
  }

  updateCommentRating(data: UpdatingRating): Observable<CommentType> {
    return this.http.patch<CommentType>(`/api/comments/${data.id}/rating`, {
      rating: data.rating,
    });
  }

  upPostRating(data: UpdatingRating): Observable<BlogPostType> {
    return this.http.patch<ArticleEntity>(`api/articles/${data.id}/rating-up`, {}).pipe(
      switchMap((updatedArticle: ArticleEntity) =>
        this.categoriesService.getCategories().pipe(
          map((categories) => {
            const category = categories.find((cat) => cat.id === updatedArticle.categoryId);
            return mapFromBackend(updatedArticle, category?.name || 'Без категории');
          }),
        ),
      ),
    );
  }

  downPostRating(data: UpdatingRating): Observable<BlogPostType> {
    return this.http.patch<ArticleEntity>(`api/articles/${data.id}/rating-down`, {}).pipe(
      switchMap((updatedArticle: ArticleEntity) =>
        this.categoriesService.getCategories().pipe(
          map((categories) => {
            const category = categories.find((cat) => cat.id === updatedArticle.categoryId);
            return mapFromBackend(updatedArticle, category?.name || 'Без категории');
          }),
        ),
      ),
    );
  }
}
