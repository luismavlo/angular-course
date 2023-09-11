import { Component } from '@angular/core';
import { Anime } from '../interfaces/anime.interface';

@Component({
  selector: 'app-anime-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  public animes: Anime[] = [
    {
      image: 'https://i.blogs.es/2b2aa9/dr-stone/1366_2000.jpeg',
      title: 'Dr. Stone',
      episodeNumber: 9,
      genre: 'Ciencia, Acción',
      publicationDate: '2023-09-09',
    },
    {
      image:
        'https://occ-0-2186-56.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABZurBGy43KUFxe0MZe0pykgSzVPFc9u0VpoAJGm1R1YJwER6-zkeY_vwKi-O8470hQU-k3xxbTiQBjNGss60XzyiuDQLWtFn23Zq.jpg?r=48d',
      title: 'Sword Art Online',
      episodeNumber: 21,
      genre: 'Acción',
      publicationDate: '2023-09-08',
    },
    {
      image:
        'https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f21a3bd28b1dda00383875569fe10e06.jpe',
      title: 'Rokka no Yusha',
      episodeNumber: 10,
      genre: 'Acción',
      publicationDate: '2023-09-08',
    },
    {
      image:
        'https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f21a3bd28b1dda00383875569fe10e06.jpe',
      title: 'Rokka no Yusha',
      episodeNumber: 10,
      genre: 'Acción',
      publicationDate: '2023-09-08',
    },
    {
      image:
        'https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f21a3bd28b1dda00383875569fe10e06.jpe',
      title: 'Rokka no Yusha',
      episodeNumber: 10,
      genre: 'Acción',
      publicationDate: '2023-09-08',
    },
    {
      image:
        'https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f21a3bd28b1dda00383875569fe10e06.jpe',
      title: 'Rokka no Yusha',
      episodeNumber: 10,
      genre: 'Acción',
      publicationDate: '2023-09-08',
    },
    {
      image:
        'https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f21a3bd28b1dda00383875569fe10e06.jpe',
      title: 'Rokka no Yusha',
      episodeNumber: 10,
      genre: 'Acción',
      publicationDate: '2023-09-08',
    },
    {
      image:
        'https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f21a3bd28b1dda00383875569fe10e06.jpe',
      title: 'Rokka no Yusha',
      episodeNumber: 10,
      genre: 'Acción',
      publicationDate: '2023-09-08',
    },
  ];
}
