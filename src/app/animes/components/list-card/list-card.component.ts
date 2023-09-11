import { Component, Input } from '@angular/core';
import { Anime } from '../../interfaces/anime.interface';

@Component({
  selector: 'app-anime-card-list',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css'],
})
export class ListCardComponent {
  @Input()
  public animes!: Anime[];
}
