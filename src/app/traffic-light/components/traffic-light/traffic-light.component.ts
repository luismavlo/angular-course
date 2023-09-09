import { Component } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css'],
})
export class TrafficLightComponent {
  public count: number = 0;

  increase() {
    if (this.count >= 3) return;
    this.count++;
  }

  decrease() {
    if (this.count <= 0) return;
    this.count--;
  }
}
