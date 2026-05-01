import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  workPlaces = [
    {
      company: 'ООО "CreativeAgency" (2019 — 2022)',
      position: 'Веб-разработчик',
      responsibilities:
        'Создание корпоративных сайтов и веб-приложений на React и Vue.js, оптимизация производительности, работа с клиентами и сбор требований.',
      img: './Consectutur.svg',
    },
    {
      company: 'Стартап "TechVenture" (2018 — 2019)',
      position: 'Фронтенд-разработчик',
      responsibilities:
        ' Разработка пользовательского интерфейса для платформы e-learning, работа с REST API и веб-стандартами.',
      img: './Bibendum.svg',
    },
    {
      company: 'Веб-студия "WebMasters" (2017 — 2018)',
      position: 'Интернет-стажёр',
      responsibilities:
        ' Первый опыт в профессиональной разработке, участие в создании и поддержке различных проектов.',
      img: './Adipiscing.svg',
    },
  ];
}
