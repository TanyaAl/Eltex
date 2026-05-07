/* eslint-disable import/prefer-default-export */
import { Component, input, output } from '@angular/core';
import { BlogPostType } from '../../../types/BlogPostType';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.scss',
})
export class BlogPost {
  blogPost = input.required<BlogPostType>();

  delete = output<string>();

  edit = output<string>();

  protected onDelete(event: MouseEvent) {
    event.stopPropagation();
    console.log('ONDELETE');
    this.delete.emit(this.blogPost().id);
  }

  protected onEdit(event: MouseEvent) {
    event.stopPropagation();
    this.edit.emit(this.blogPost().id);
  }
}
