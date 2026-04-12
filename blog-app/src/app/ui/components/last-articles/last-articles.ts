/* eslint-disable import/prefer-default-export */
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LastArticle } from '../last-article/last-article';

@Component({
  selector: 'app-last-articles',
  imports: [LastArticle, RouterModule],
  templateUrl: './last-articles.html',
  styleUrl: './last-articles.scss',
})
export class LastArticles {
  articles = [
    {
      id: 1,
      category: 'Дизайн',
      title: 'Как создать адаптивный дизайн за 30 минут',
      text: `В этой статье я расскажу о ключевых принципах создания мобильных интерфейсов, которые
      одинаково хорошо выглядят на всех устройствах. Вы узнаете о медиа-запросах, гибких сетках и
      практических примерах кода, которые можно использовать прямо сейчас.`,
    },
    {
      id: 2,
      category: 'Разработка',
      title: 'Как быстро сверстать лендинг',
      text: 'В этой статье я расскажу о ключевых принципах быстрой верстки лендингов, которые помогают создавать аккуратные и адаптивные страницы за минимальное время. Вы узнаете о правильной структуре блоков, переиспользовании компонентов и практических приёмах, которые позволяют ускорить разработку без потери качества.',
    },
  ];
}
