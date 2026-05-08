import { Injectable } from '@angular/core';
import { FullPostInterface } from './full-post-interface';
import { Observable, of } from 'rxjs';
import { CommentType } from '../../types/CommentType';
import { FullPostType } from '../../types/FullPostType';
import { BlogPostType } from '../../types/BlogPostType';

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

  addComment(postId: string, comment: { author: string; text: string }): Observable<CommentType[]> {
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

    return of(updatedComments);
  }

  updateCommentRating(commentId: string, rating: number): Observable<CommentType> {
    const comments: CommentType[] = JSON.parse(localStorage.getItem('comments') || '[]');
    const targetComment = comments.find((item) => item.id === commentId);
    if (!targetComment) {
      throw new Error('Comment not found');
    }
    const updatedComment: CommentType = { ...targetComment, rating: rating };

    const updatedComments = comments.map((comment) =>
      comment.id === commentId ? updatedComment : comment,
    );
    localStorage.setItem('comments', JSON.stringify(updatedComments));

    return of(updatedComment);
  }

  updatePostRating(postId: string, rating: number): Observable<BlogPostType> {
    const posts: BlogPostType[] = JSON.parse(localStorage.getItem('posts') || '[]');
    const targetPost = posts.find((item) => item.id === postId);
    if (!targetPost) {
      throw new Error('Post not found');
    }
    const updatedPost: BlogPostType = { ...targetPost, rating: rating };

    const updatedPosts = posts.map((post) => (post.id === postId ? updatedPost : post));
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    return of(updatedPost);
  }
}
