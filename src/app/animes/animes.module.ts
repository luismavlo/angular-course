import { MainPageComponent } from './pages/main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { AddAnimeFormComponent } from './components/add-anime-form/add-anime-form.component';

@NgModule({
  declarations: [
    CardComponent,
    ListCardComponent,
    MainPageComponent,
    AddAnimeFormComponent,
  ],
  exports: [MainPageComponent],
  imports: [CommonModule],
})
export class AnimesModule {}
