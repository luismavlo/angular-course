import { Component, Input } from '@angular/core';
import { Anime } from '../../interfaces/anime.interface';

@Component({
  selector: 'app-anime-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  // @Input()
  // public title: string = '';

  // public episodeNumber: number = 10;
  // public genre: string = 'Acción';
  // public publicationDate: string | Date = '2023-09-08';

  // @Input()
  // public image: string = '';

  @Input()
  public anime!: Anime;

  isNewEpisode(): string {
    //importante explicarar que las constantes de un metodo solo viven en ese metodo
    //si quisieran que fuesen accedidas desde el html tienen que colocarlas como una propiedad
    const publicationDate: number = new Date(
      this.anime.publicationDate
    ).getTime();
    const today: number = new Date().getTime();

    const diference = today - publicationDate;

    const millisecondsInADay = 1000 * 60 * 60 * 24;

    if (diference <= millisecondsInADay) {
      return 'Nuevo!';
    }

    return 'No es nuevo!';
  }
}
