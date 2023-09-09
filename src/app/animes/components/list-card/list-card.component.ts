import { Component } from '@angular/core';

interface Anime {
  title: string;
  episodeNumber: number;
  genre: string;
  publicationDate: string | Date;
}
@Component({
  selector: 'app-anime-card-list',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css'],
})
export class ListCardComponent {
  public animes: Anime[] = [
    {
      title: 'Rokka no Yusha',
      episodeNumber: 10,
      genre: 'Acción',
      publicationDate: '2023-09-08',
    },
    {
      title: 'Rokka no Yusha',
      episodeNumber: 10,
      genre: 'Acción',
      publicationDate: '2023-09-08',
    },
    {
      title: 'Rokka no Yusha',
      episodeNumber: 10,
      genre: 'Acción',
      publicationDate: '2023-09-08',
    },
    {
      title: 'Rokka no Yusha',
      episodeNumber: 10,
      genre: 'Acción',
      publicationDate: '2023-09-08',
    },
    {
      title: 'Rokka no Yusha',
      episodeNumber: 10,
      genre: 'Acción',
      publicationDate: '2023-09-08',
    },
    {
      title: 'Rokka no Yusha',
      episodeNumber: 10,
      genre: 'Acción',
      publicationDate: '2023-09-08',
    },
    {
      title: 'Rokka no Yusha',
      episodeNumber: 10,
      genre: 'Acción',
      publicationDate: '2023-09-08',
    },
    {
      title: 'Rokka no Yusha',
      episodeNumber: 10,
      genre: 'Acción',
      publicationDate: '2023-09-08',
    },
  ];

  deleteAnime() {
    this.animes.pop();
  }
}
