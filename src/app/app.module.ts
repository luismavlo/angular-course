import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrafficLightModule } from './traffic-light/traffic-light.module';
import { AnimesModule } from './animes/animes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TrafficLightModule, AnimesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
