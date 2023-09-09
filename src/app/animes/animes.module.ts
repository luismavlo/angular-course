import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ListCardComponent } from './components/list-card/list-card.component';

@NgModule({
  declarations: [CardComponent, ListCardComponent],
  exports: [ListCardComponent],
  imports: [CommonModule],
})
export class AnimesModule {}
