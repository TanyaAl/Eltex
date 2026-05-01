import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = [
    { skill: 'JS/TS/Node.js' },
    { skill: 'HTML5/CSS3' },
    { skill: 'React/Vue.js' },
    { skill: 'Figma' },
    { skill: 'VSCode' },
    { skill: 'Webpack/Docker' },
    { skill: 'Agile/Scrum' },
    { skill: 'Test-Driven Development' },
  ];
}
