import { Component } from '@angular/core';
import { Experience } from '../experience/experience';
import { Skills } from '../skills/skills';
import { LastArticles } from '../last-articles/last-articles';

@Component({
  selector: 'app-main-page-info',
  standalone: true,
  imports: [Experience, Skills, LastArticles],
  templateUrl: './main-page-info.html',
  styleUrl: './main-page-info.scss',
})
export class MainPageInfo {}
