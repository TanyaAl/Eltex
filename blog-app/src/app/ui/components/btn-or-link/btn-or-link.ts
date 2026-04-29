import { Component, input } from '@angular/core';

@Component({
  selector: 'app-btn-or-link',
  imports: [],
  templateUrl: './btn-or-link.html',
  styleUrl: './btn-or-link.scss',
})
export class BtnOrLink {
  postsCount = input<number>(0);
}
