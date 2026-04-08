import { Component } from '@angular/core';
import { BlogPageTitle } from '../../components/blog-page-title/blog-page-title';
import { BtnOrLink } from '../../components/btn-or-link/btn-or-link';

@Component({
  selector: 'app-blog-page',
  imports: [BlogPageTitle, BtnOrLink],
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.scss',
})
export class BlogPage {}
