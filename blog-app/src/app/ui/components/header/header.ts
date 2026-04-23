import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMenuOpen = false;

  protected toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  protected closeMenu() {
    this.isMenuOpen = false;
  }
}
