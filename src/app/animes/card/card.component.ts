import { Component } from '@angular/core';

@Component({
  selector: 'app-anime-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  public title: string = 'Rokka no Yusha';
  public episodeNumber: number = 10;
  public genre: string = 'Acción';
  public publicationDate: string | Date = '2023-09-08';

  isNewEpisode(): string {
    const publicationDate: number = new Date(this.publicationDate).getTime();
    const today: number = new Date().getTime();

    const diference = today - publicationDate;

    const millisecondsInADay = 1000 * 60 * 60 * 24;

    if (diference <= millisecondsInADay) {
      return 'Nuevo!';
    }

    return 'No es nuevo!';
  }
}
