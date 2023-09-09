import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrafficLightComponent } from './components/traffic-light/traffic-light.component';

@NgModule({
  declarations: [TrafficLightComponent],
  exports: [TrafficLightComponent],
  imports: [CommonModule],
})
export class TrafficLightModule {}
