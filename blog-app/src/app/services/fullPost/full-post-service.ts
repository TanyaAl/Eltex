import { Injectable } from '@angular/core';
import { FullPostInterface } from './full-post-interface';
import { Observable, of } from 'rxjs';
import { CommentType } from '../../types/CommentType';
import { FullPostType } from '../../types/FullPostType';
import { BlogPostType } from '../../types/BlogPostType';
import { NewCommentType } from '../../types/NewCommentType';
import { UpdatingRating } from '../../types/UpdatingRating';

@Injectable()
export class FullPostService implements FullPostInterface {
  loadPostWithComments(id: string): Observable<FullPostType> {
    const posts: BlogPostType[] = JSON.parse(localStorage.getItem('posts') || '[]');
    const comments: CommentType[] = JSON.parse(localStorage.getItem('comments') || '[]');
    const targetPost = posts.find((item) => item.id === id);
    const targetComments = comments.filter((item) => item.postId === id);
    if (!targetPost) {
      throw new Error('Post not found');
    }
    const response: FullPostType = { ...targetPost, comments: targetComments };
    console.log('PAGE', response);
    return of(response);
  }

  addComment(postId: string, comment: NewCommentType): Observable<CommentType> {
    const posts: BlogPostType[] = JSON.parse(localStorage.getItem('posts') || '[]');
    const comments: CommentType[] = JSON.parse(localStorage.getItem('comments') || '[]');
    const targetPost = posts.find((item) => item.id === postId);
    const todayDate = new Date()
      .toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
      .replace('г', '')
      .replace('.', '');

    const newComment: CommentType = {
      id: crypto.randomUUID(),
      postId: targetPost!.id,
      author: comment.author,
      text: comment.text,
      date: todayDate,
      rating: 0,
    };

    const updatedComments = [...comments, newComment];
    localStorage.setItem('comments', JSON.stringify(updatedComments));

    return of(newComment);
  }

  updateCommentRating(data: UpdatingRating): Observable<CommentType> {
    const comments: CommentType[] = JSON.parse(localStorage.getItem('comments') || '[]');
    const targetComment = comments.find((item) => item.id === data.id);
    if (!targetComment) {
      throw new Error('Comment not found');
    }
    const updatedComment: CommentType = { ...targetComment, rating: data.rating };

    const updatedComments = comments.map((comment) =>
      comment.id === data.id ? updatedComment : comment,
    );
    localStorage.setItem('comments', JSON.stringify(updatedComments));

    return of(updatedComment);
  }

  upPostRating(data: UpdatingRating): Observable<BlogPostType> {
    const posts: BlogPostType[] = JSON.parse(localStorage.getItem('posts') || '[]');
    const targetPost = posts.find((item) => item.id === data.id);
    if (!targetPost) {
      throw new Error('Post not found');
    }
    const updatedPost: BlogPostType = { ...targetPost, rating: data.rating };

    const updatedPosts = posts.map((post) => (post.id === data.id ? updatedPost : post));
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    return of(updatedPost);
  }

  downPostRating(data: UpdatingRating): Observable<BlogPostType> {
    const posts: BlogPostType[] = JSON.parse(localStorage.getItem('posts') || '[]');
    const targetPost = posts.find((item) => item.id === data.id);
    if (!targetPost) {
      throw new Error('Post not found');
    }
    const updatedPost: BlogPostType = { ...targetPost, rating: data.rating };

    const updatedPosts = posts.map((post) => (post.id === data.id ? updatedPost : post));
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    return of(updatedPost);
  }
}
