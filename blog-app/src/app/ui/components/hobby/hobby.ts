import { Component } from '@angular/core';

@Component({
  selector: 'app-hobby',
  imports: [],
  templateUrl: './hobby.html',
  styleUrl: './hobby.scss',
})
export class Hobby {
  vertHobby = [
    {
      img: './hobby-vert.webp',
      title: 'Hobby project name',
      text: ' Duis nisi do exercitation in irure aliqua commodo nisi eu id reprehenderit dolore fugiat consectetur irure labore est ea.',
    },
    {
      img: './hobby-vert.webp',
      title: 'Hobby project name',
      text: ' Duis nisi do exercitation in irure aliqua commodo nisi eu id reprehenderit dolore fugiat consectetur irure labore est ea.',
    },
  ];

  gorizHobby = [
    {
      img: './hobby-goriz.webp',
      title: 'Hobby project name',
      text: ' Duis nisi do exercitation in irure aliqua commodo nisi eu id reprehenderit dolore fugiat consectetur irure labore est ea.',
    },
    {
      img: './hobby-goriz.webp',
      title: 'Hobby project name',
      text: ' Duis nisi do exercitation in irure aliqua commodo nisi eu id reprehenderit dolore fugiat consectetur irure labore est ea.',
    },
  ];
}
