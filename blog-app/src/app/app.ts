/* eslint-disable import/no-unresolved */
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './ui/components/header/header';
import { Footer } from './ui/components/footer/footer';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('blog-app');
  private icons = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  constructor() {
    this.icons.addSvgIcon(
      'add-article',
      this.sanitizer.bypassSecurityTrustResourceUrl('./icons/add-article.svg'),
    );
    this.icons.addSvgIcon(
      'arrow',
      this.sanitizer.bypassSecurityTrustResourceUrl('./icons/arrow.svg'),
    );
    this.icons.addSvgIcon(
      'stat',
      this.sanitizer.bypassSecurityTrustResourceUrl('./icons/stat.svg'),
    );
    this.icons.addSvgIcon(
      'close',
      this.sanitizer.bypassSecurityTrustResourceUrl('./icons/close.svg'),
    );
    this.icons.addSvgIcon(
      'delete',
      this.sanitizer.bypassSecurityTrustResourceUrl('./icons/delete.svg'),
    );
    this.icons.addSvgIcon(
      'edit',
      this.sanitizer.bypassSecurityTrustResourceUrl('./icons/edit.svg'),
    );
    this.icons.addSvgIcon(
      'like',
      this.sanitizer.bypassSecurityTrustResourceUrl('./icons/like.svg'),
    );
  }
}
