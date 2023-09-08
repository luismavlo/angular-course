import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';
import { CardComponent } from './animes/card/card.component';
import { ListCardComponent } from './animes/list-card/list-card.component';

@NgModule({
  declarations: [AppComponent, TrafficLightComponent, CardComponent, ListCardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
