import { Component } from '@angular/core';
import { AboutMe } from '../../components/about-me/about-me';
import { MainPageInfo } from '../../components/main-page-info/main-page-info';
import { Hobby } from '../../components/hobby/hobby';

@Component({
  selector: 'app-main-page',
  imports: [AboutMe, MainPageInfo, Hobby],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
