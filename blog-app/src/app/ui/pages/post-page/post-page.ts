import { Component } from '@angular/core';
import { PostCard } from '../../components/post-card/post-card';
import { FormForComment } from '../../components/form-for-comment/form-for-comment';
import { Comment } from '../../components/comment/comment';

@Component({
  selector: 'app-post-page',
  imports: [PostCard, FormForComment, Comment],
  templateUrl: './post-page.html',
  styleUrl: './post-page.scss',
})
export class PostPage {}
